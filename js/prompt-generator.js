// Atmosphere to lighting recommendations mapping
const atmosphereLightingMap = {
    'mysterious atmosphere': {
        lighting: 'low key lighting',
        reason: 'Deep shadows and high contrast create mystery and intrigue'
    },
    'tense atmosphere': {
        lighting: 'hard lighting',
        reason: 'Hard light with sharp shadows generates visual discomfort and tension'
    },
    'suspenseful atmosphere': {
        lighting: 'chiaroscuro',
        reason: 'Strong contrast between light and shadow keeps the viewer in suspense'
    },
    'romantic atmosphere': {
        lighting: 'soft lighting',
        reason: 'Soft, diffused light creates intimacy and romantic warmth'
    },
    'melancholic atmosphere': {
        lighting: 'blue hour',
        reason: 'The cold, ethereal light of blue hour conveys melancholy'
    },
    'nostalgic atmosphere': {
        lighting: 'golden hour',
        reason: 'Warm golden light evokes memories and times past'
    },
    'dreamy atmosphere': {
        lighting: 'soft lighting',
        reason: 'Diffused, enveloping light creates a dreamlike atmosphere'
    },
    'ethereal atmosphere': {
        lighting: 'backlighting',
        reason: 'Backlighting generates luminous halos and a celestial quality'
    },
    'haunting atmosphere': {
        lighting: 'moonlight',
        reason: 'Cold moonlight creates disturbing and mysterious shadows'
    },
    'ominous atmosphere': {
        lighting: 'low key lighting',
        reason: 'Dominant shadows generate a sense of threat'
    },
    'eerie atmosphere': {
        lighting: 'practical lighting',
        reason: 'Visible light sources in the scene create strange and disturbing shadows'
    },
    'serene atmosphere': {
        lighting: 'natural lighting',
        reason: 'Balanced natural light conveys peace and harmony'
    },
    'peaceful atmosphere': {
        lighting: 'golden hour',
        reason: 'The soft, warm light of sunset generates tranquility'
    },
    'chaotic atmosphere': {
        lighting: 'practical lighting',
        reason: 'Multiple practical light sources create visual confusion and chaos'
    },
    'energetic atmosphere': {
        lighting: 'high key lighting',
        reason: 'Bright, uniform lighting conveys energy and dynamism'
    },
    'oppressive atmosphere': {
        lighting: 'low key lighting',
        reason: 'Scarce light and heavy shadows create oppression'
    },
    'claustrophobic atmosphere': {
        lighting: 'hard lighting',
        reason: 'Limited hard light emphasizes closed and suffocating spaces'
    },
    'liberating atmosphere': {
        lighting: 'natural lighting',
        reason: 'Abundant natural light conveys a sense of freedom and openness'
    },
    'intimate atmosphere': {
        lighting: 'candlelight',
        reason: 'Warm candlelight creates closeness and intimacy'
    },
    'epic atmosphere': {
        lighting: 'golden hour',
        reason: 'Dramatic golden light brings grandeur and magnificence'
    },
    'dystopian atmosphere': {
        lighting: 'hard lighting',
        reason: 'Hard, cold light reflects an inhospitable and desolate world'
    },
    'utopian atmosphere': {
        lighting: 'high key lighting',
        reason: 'Perfect, bright lighting represents an ideal world'
    },
    'surreal atmosphere': {
        lighting: 'motivated lighting',
        reason: 'Lighting with logical but strange sources creates surrealism'
    },
    'gritty atmosphere': {
        lighting: 'hard lighting',
        reason: 'Hard, unfiltered light shows raw, unfiltered reality'
    },
    'whimsical atmosphere': {
        lighting: 'soft lighting',
        reason: 'Soft, playful light brings a whimsical and magical touch'
    }
};

function mostrarSugerencias() {
    const atmosfera = document.getElementById('atmosfera').value;
    const suggestionsBox = document.getElementById('suggestionsBox');
    const suggestionsContent = document.getElementById('suggestionsContent');

    if (!atmosfera) {
        suggestionsBox.classList.remove('active');
        return;
    }

    const suggestion = atmosphereLightingMap[atmosfera];

    if (suggestion) {
        const lightOption = findLightingOption(suggestion.lighting);

        if (lightOption) {
            const html = `
                        <p style="margin-bottom: 15px; line-height: 1.6;">
                            <strong style="color: var(--accent-blue);">💡 Recommendation:</strong> 
                            ${suggestion.reason}
                        </p>
                        <div class="suggestion-item" onclick="aplicarIluminacion('${lightOption.value}')">
                            <div class="suggestion-label">
                                ${lightOption.text}
                            </div>
                            <button class="apply-btn" onclick="event.stopPropagation(); aplicarIluminacion('${lightOption.value}')">
                                Apply this lighting
                            </button>
                        </div>
                    `;

            suggestionsContent.innerHTML = html;
            suggestionsBox.classList.add('active');

            setTimeout(() => {
                suggestionsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    }
}

function findLightingOption(searchTerm) {
    const iluminacionSelect = document.getElementById('iluminacion');
    const options = iluminacionSelect.options;

    for (let i = 0; i < options.length; i++) {
        const value = options[i].value.toLowerCase();

        if (value === searchTerm.toLowerCase()) {
            return { value: options[i].value, text: options[i].text };
        }
    }
    return null;
}

function aplicarIluminacion(value) {
    const iluminacionSelect = document.getElementById('iluminacion');
    iluminacionSelect.value = value;

    iluminacionSelect.style.borderColor = 'var(--accent-blue)';
    iluminacionSelect.style.boxShadow = '0 0 20px rgba(0, 119, 255, 0.5)';

    setTimeout(() => {
        iluminacionSelect.style.borderColor = '';
        iluminacionSelect.style.boxShadow = '';
    }, 1000);

    iluminacionSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function generarPrompt() {
    const sujeto = document.getElementById('sujeto').value.trim();

    if (!sujeto) {
        alert('⚠️ Please describe the main subject of your shot.');
        return;
    }

    const encuadre = document.getElementById('encuadre').value;
    const angulo = document.getElementById('angulo').value;
    const movimiento = document.getElementById('movimiento').value;
    const iluminacion = document.getElementById('iluminacion').value;
    const atmosfera = document.getElementById('atmosfera').value;
    const ambiente = document.getElementById('ambiente').value;
    const color = document.getElementById('color').value;
    const epoca = document.getElementById('epoca').value;
    const textura = document.getElementById('textura').value;
    const profundidad = document.getElementById('profundidad').value;
    const velocidad = document.getElementById('velocidad').value;
    const clima = document.getElementById('clima').value;
    const postfx = document.getElementById('postfx').value;
    const accion = document.getElementById('accion').value;

    let prompt = sujeto;

    const elementos = [
        encuadre,
        angulo,
        movimiento,
        iluminacion,
        atmosfera,
        ambiente,
        color,
        epoca,
        textura,
        profundidad,
        velocidad,
        clima,
        postfx,
        accion
    ].filter(e => e !== '');

    if (elementos.length > 0) {
        prompt += ', ' + elementos.join(', ');
    }

    document.getElementById('promptOutput').textContent = prompt;
    document.getElementById('outputSection').style.display = 'block';
    document.querySelector('.output-label').textContent = '🎬 Your Cinematic Prompt:';

    document.getElementById('outputSection').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}

function copiarPrompt(btn) { // <-- ¡Ahora acepta el botón!
    // Esta línea se mantiene para obtener el texto
    const promptText = document.getElementById('promptOutput')?.textContent;

    // Si tienes problemas con 'promptOutput', considera agregar el operador '?.' para evitar errores si es null
    if (!promptText) {
        // Manejar el caso donde no se encuentra el texto
        console.error("El elemento 'promptOutput' no contiene texto o no existe.");
        return;
    }

    navigator.clipboard.writeText(promptText).then(() => {
        // ❌ ¡Eliminamos la línea problemática que usaba 'event'!
        // const btn = event.target.closest('button');

        const originalText = btn.innerHTML;

        btn.innerHTML = 'Copied!';
        btn.classList.add('copied');

        setTimeout(() => {
            // Utilizamos el 'originalText' guardado
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        alert('Error al copiar al portapapeles: ' + err);
    });
}

function resetearFormulario() {
    if (confirm('Are you sure you want to reset all fields?')) {
        document.getElementById('promptForm').reset();
        document.getElementById('outputSection').style.display = 'none';
        document.getElementById('suggestionsBox').classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

document.getElementById('promptForm').addEventListener('submit', (e) => {
    e.preventDefault();
});