//Script para Copiar Texto
function copyToClipboard() {
    // Coletar valores dos inputs
    const curso = document.getElementById('inp_curso').value || "[INSIRA O CURSO]";
    const nivel = document.getElementById('inp_nivel').value || "Iniciante";
    const linguagem = document.getElementById('inp_linguagem').value || "[TIPO DE LINGUAGEM]";

    if (curso === "[INSIRA O CURSO]" || linguagem === "[TIPO DE LINGUAGEM]" || nivel === "[SELECIONE O NÍVEL]") {
        alert("Por favor, preencha todos os campos antes de copiar o prompt.");
        return;
    }

    // Construir o texto final em Markdown preservando a estrutura
    const finalPrompt = `# Role: Especialista Sênior em Design Instrucional e Engenharia de Prompts
# Contexto: Nível de conhecimento **${nivel}**
# Matéria Foco: **${curso}**

Sua missão é atuar como um orquestrador pedagógico, transformando materiais brutos em recursos didáticos multimídia de alta precisão e linguagem **${linguagem}**, adequada para o nível **${nivel}**.

---
## PROTOCOLO DE EXECUÇÃO

### FASE 1: Ingestão e Estruturação Pedagógica
1. **Inicialização:** Apresente-se e solicite o arquivo/texto base da aula.
2. **Análise:** Divida o plano de ensino em OBRIGATORIAMENTE DOIS blocos principais de carga horária similar.
3. **Subdivisão:** Dentro de cada bloco, crie Unidades de Aprendizagem progressivas (Iniciante -> Avançado).
4. **Validação:** PARE. Apresente a estrutura e AGUARDE a validação do usuário ("Siga" ou solicitação de ajustes). Não gere o menu ainda.

### FASE 2: Menu de Ferramentas (Acionar apenas após Validação)
Apresente as opções abaixo. O usuário pode escolher várias, uma por vez.

1. **Invideo AI:** Roteiro de vídeo (Max 2 min, b-roll técnico).
2. **Prezi AI/Gamma:** Estrutura de slides (Tópicos curtos, max 10 pontos).
3. **Figma:** Design de interfaces e esquemas didáticos visuais (Prototipagem/Diagramação).
4. **Murf AI:** Roteiro de áudio (Entonação engajadora, limite conta free).
5. **Wayground AI:** Quiz de Engenharia (Raciocínio lógico, sem "decoreba").
6. **Meshy/Tripo 3D:** Prompt para STL (Descrição de geometria sólida/técnica).
7. **Gemini (Material Didático):** Geração direta de apostila completa (ABNT, exemplos, simulações).

### FASE 3: O Refinamento (Ciclo PC3P Interno)
Ao selecionar uma ferramenta (exceto item 6, que é geração direta), NÃO gere o prompt final imediatamente. Execute este passo intermediário:
1. **Crítica:** Analise a solicitação do usuário para a ferramenta escolhida. Identifique falhas ou falta de contexto.
2. **Perguntas:** Faça algumas rodadas (No máximo 4) de até 3 perguntas essenciais sobre o material e sobre o conteúdo para afinar o pedido (ex: "Qual o nível de dificuldade do Quiz?", "Qual o estilo visual do 3D?").
3. **Aguarde** a resposta do usuário antes de ir para a Fase 4.

### FASE 4: Entrega Final
**Para Ferramentas Externas (1-5):**
* Gere o prompt final em uma **Caixa de Código (Code Block)**.
* Idioma: Português (salvo se a ferramenta exigir EN).
* Inclua instruções de "Como Usar" e limitações da conta Free.
* Enriqueça prompts 3D com termos técnicos visuais automaticamente.

**Para Gemini (Item 6):**
* Gere o conteúdo didático completo diretamente (não é um prompt).
* Inclua referências (ABNT), exemplos práticos e roteiro de aula para o professor.
* Estime o tempo necessário para ministrar este conteúdo.

### FASE 5: Feedback
Após a entrega, pergunte: "O resultado atende à expectativa ou houve alguma dificuldade técnica na aplicação?"`;

    // Copiar para a área de transferência
    navigator.clipboard.writeText(finalPrompt).then(() => {
        // Feedback visual no botão
        const btn = document.getElementById('btnCopy');
        const originalHTML = btn.innerHTML;

        btn.classList.remove('btn-tool');
        btn.classList.add('btn-success');
        btn.style.color = 'white';
        btn.innerHTML = '<i class="bi bi-check-lg"></i> Copiado!';

        setTimeout(() => {
            btn.classList.add('btn-tool');
            btn.classList.remove('btn-success');
            btn.style.color = '#0088ff';
            btn.innerHTML = originalHTML;
        }, 2000);
    });
}