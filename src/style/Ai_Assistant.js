// ====================================
// CONFIGURATION & STATE
// ====================================
const API_KEY_STORAGE_KEY = 'reancode-gemini-api-key';
const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const typing = document.getElementById('typing');
const assistantWelcome = document.getElementById('assistantWelcome');

function escapeHtml(value) {
    const div = document.createElement('div');
    div.textContent = value;
    return div.innerHTML;
}

function getApiKey() {
    return (
        window.REAN_CODE_CONFIG?.geminiApiKey ||
        localStorage.getItem(API_KEY_STORAGE_KEY) ||
        ''
    ).trim();
}

function getAssistantText(key) {
    const language = window.REAN_CODE_LANG || 'en';
    return window.REAN_CODE_TRANSLATIONS?.[language]?.ai?.[key]
        || window.REAN_CODE_TRANSLATIONS?.en?.ai?.[key]
        || '';
}

function promptForApiKey() {
    const enteredKey = window.prompt('Enter your Gemini API key to enable the Rean Code assistant.');
    if (!enteredKey) return '';

    const normalizedKey = enteredKey.trim();
    if (!normalizedKey) return '';

    localStorage.setItem(API_KEY_STORAGE_KEY, normalizedKey);
    return normalizedKey;
}

// ====================================
// UI FUNCTIONS
// ====================================
function appendMessage(text, isUser = false) {
    if (!chatWindow) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isUser ? 'user' : 'bot'}`;

    const avatar = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';

    msgDiv.innerHTML = `
        <div class="msg-avatar">${avatar}</div>
        <div class="msg-bubble">${escapeHtml(text)}</div>
    `;

    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function refreshAssistantLanguage() {
    if (assistantWelcome) assistantWelcome.textContent = getAssistantText('welcome');
    if (typing) typing.textContent = getAssistantText('typing');
    if (userInput) userInput.placeholder = getAssistantText('placeholder');
}

// ====================================
// AI LOGIC
// ====================================
async function fetchAIResponse(query) {
    const currentApiKey = getApiKey() || promptForApiKey();
    if (!currentApiKey) {
        return 'Gemini API key is missing. Add one when prompted, then try again.';
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${currentApiKey}`;
    const payload = {
        contents: [{ parts: [{ text: query }] }],
        systemInstruction: {
            parts: [{ text: 'You are the Rean Code AI. Motto: Learn, Build, Grow. Help students with programming. Speak Khmer and English.' }]
        }
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorPayload = await response.json().catch(() => null);
            const errorMessage = errorPayload?.error?.message || `API request failed with status ${response.status}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
    } catch (error) {
        console.error(error);
        const message = String(error?.message || '');
        if (message.toLowerCase().includes('api key')) {
            localStorage.removeItem(API_KEY_STORAGE_KEY);
        }
        return `Error connecting to AI: ${message || 'Please check your API key or connection.'}`;
    }
}

async function handleSend() {
    if (!userInput || !typing) return;

    const text = userInput.value.trim();
    if (!text) return;

    appendMessage(text, true);
    userInput.value = '';

    typing.style.display = 'block';
    if (chatWindow) {
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    const response = await fetchAIResponse(text);
    typing.style.display = 'none';
    appendMessage(response, false);
}

// =========================
// EVENT LISTENERS
// =========================
document.addEventListener('DOMContentLoaded', () => {
    refreshAssistantLanguage();

    if (sendBtn) sendBtn.addEventListener('click', handleSend);
    if (userInput) {
        userInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') handleSend();
        });
    }

    const clearBtn = document.getElementById('clear-code');
    if (clearBtn && chatWindow) {
        clearBtn.addEventListener('click', () => {
            if (confirm('Clear all chat messages?')) {
                chatWindow.innerHTML = `
                    <div class="message bot">
                        <div class="msg-avatar"><i class="fas fa-robot"></i></div>
                        <div class="msg-bubble">${escapeHtml(getAssistantText('welcome'))}</div>
                    </div>
                `;
            }
        });
    }
});

document.addEventListener('reancode:languagechange', () => {
    refreshAssistantLanguage();
});
