import baseMilitarImg from '../assets/Base-militar.png'

export interface Chapter {
  number: number
  slug: string
  title: string
  location: string
  chronology: string
  image?: { src: string; alt: string }
  paragraphs: string[]
}

export const chapters: Chapter[] = [
  {
    number: 1,
    slug: 'ecos-de-traicao',
    title: 'Ecos de Traição em Frequência Baixa',
    location: 'Distrito de Baixa-Luz, Subúrbios de Nova Arca',
    chronology: 'Era do Silício Negro, Ciclo 404',
    paragraphs: [
      `A penumbra do apartamento de Vico era cortada apenas pelo brilho intermitente de um holograma publicitário vindo da rua, projetando tons de violeta e cromo sobre as paredes descascadas. O ar cheirava a metal oxidado e incenso de sândalo sintético. Sobre a mesa, partituras digitais cintilavam com letras que, aos olhos de um leigo, pareciam baladas românticas, mas cujas notas escondiam algoritmos de subversão capazes de desestabilizar as barreiras rúnicas de contenção do governo.`,

      `Silas estava sentado à frente dele, seus dedos tamborilando nervosamente sobre o joelho de couro sintético. Vico o observava em silêncio. Através de seu próprio Bio-Link, um implante neural que ele mesmo customizara para captar vibrações sonoras além do espectro humano, Vico começou a notar as anomalias.`,

      `O batimento cardíaco de Silas não estava apenas acelerado pelo entusiasmo da turnê; ele tinha o ritmo sincopado de quem carrega uma carga elétrica instável. Além disso, o empresário exalava o odor acre de Combustível Arcano — o rastro químico de exaustão deixado pelos motores pesados das patrulhas da Parte Alta. Silas nunca teria estado perto de tais máquinas, a menos que tivesse sido transportado por uma delas.`,

      `O olhar de Vico desceu para o pulso de Silas. Sob a manga da jaqueta gasta, um brilho verde-esmeralda pulsava: um Token de Cidadania Provisória. Era a prova física. Ninguém conseguia aquele selo sem entregar algo de valor inestimável ao Governo.`,

      `— A turnê pelos Distritos de Bronze e Ferro será a maior de todas, Vico — disse Silas, a voz trêmua, tentando forçar uma empolgação que seus sinais vitais desmentiam. — Nova Arca precisa ouvir o seu som.`,

      `Vico sentiu um gosto amargo de cobre na boca.`,

      `— Engraçado você mencionar o som, Silas — respondeu Vico, sua voz soando como o metal frio. — Porque o seu ritmo está fora de compasso hoje. Você cheira a escapamento de elite e seus olhos estão projetando coordenadas que não são de palcos.`,

      `Nesse exato momento, um rugido grave e ensurdecedor sacudiu as janelas reforçadas do apartamento. O som não vinha da rua, mas de cima. Do lado de fora, as luzes de neon foram ofuscadas pela silhueta massiva de um Aethel-Vulto modelo Keraunos — um veículo aéreo de perseguição blindado, cujas turbinas de sustentação sopravam uma ventania tóxica que estremecia o prédio.`,

      `A porta foi arrombada não por magia, mas pela força bruta de um pistão hidráulico. O Sargento Malakor entrou, sua armadura de placas negras refletindo as luzes de advertência vermelhas do Keraunos que pairava logo atrás dele, na sacada.`,

      `A silhueta de Malakor era imponente. Seu corpo era uma fusão de engenharia bélica: o braço direito, inteiramente feito de aço forjado, portava gravuras de punição rúnica que brilhavam em um vermelho opressivo. Seus olhos eram lentes térmicas frias, fixas no alvo.`,

      `— Por que, Silas? — O sussurro de Vico saiu carregado de uma decepção profunda. O token no pulso do empresário brilhou em resposta à proximidade do veículo do governo.`,

      `— Porque eu quero uma vida melhor para mim e para minha família, Vico! — Silas explodiu, levantando-se tão rápido que a cadeira tombou. — Cansei de respirar a ferrugem da Parte Baixa. Eu preciso de luz, Vico. Luz de verdade, lá em cima!`,

      `Malakor deu um passo à frente, o som de suas botas pesadas competindo com o zumbido dos motores do Keraunos lá fora.`,

      `— Vico Vane — a voz do sargento era um sintetizador mecânico. — Suas frequências provocam dissonância na ordem. Você vem comigo. Se não cooperar, serei obrigado a usar força cinética.`,

      `— Então usa, seu fantoche de metal.`,

      `Em um movimento fluido, Vico sacou uma faca de cerâmica com núcleo de tungstênio. Ele avançou como um raio contra o gigante de aço. No entanto, Malakor ativou seu Módulo de Reflexo Temporal. Para Vico, o mundo desacelerou em um borrão; para o sargento, o tempo era uma variável controlada.`,

      `Em um piscar de olhos, Malakor surgiu às costas de Vico. Um golpe seco na base do crânio, desferido pelo braço metálico, enviou uma descarga eletro-arcana que desligou o sistema nervoso do cantor. Vico desabou.`,

      `Silas, pálido, olhou para o corpo inerte.`,

      `— Sargento... minha parte eu fiz. Quando eu recebo o código de acesso para a Parte Alta? Quando o transporte chega?`,

      `Malakor olhou para o pequeno homem. Um ruído metálico saiu de seu peito — uma risada processada.`,

      `— Sobre isso... houve uma atualização nas taxas. O valor do transporte e a cidadania para traidores agora custam 400 mil créditos imperiais.`,

      `— O QUÊ?! — O grito de Silas foi abafado pelo rugido do Keraunos. — Você disse que o Governo ia custear minha passagem!`,

      `— Pois é. O Conselho mudou de ideia. Traidores são arquivos descartáveis, Silas. — Malakor agarrou o tornozelo de Vico e o arrastou em direção à rampa de carga que se abria no ventre do veículo aéreo. — Saia da minha frente antes que eu precise de mais um prisioneiro para os testes de laboratório.`,

      `Malakor subiu no Keraunos puxando Vico. As turbinas do veículo brilharam em um azul intenso e, com um estrondo gravitacional, ele subiu em direção às nuvens de poluição da Parte Alta, deixando Silas sozinho entre os destroços de sua própria traição.`,
    ],
  },
  {
    number: 2,
    slug: 'o-despertar-do-hibrido',
    title: 'O Despertar do Híbrido',
    location: 'Espaço Aéreo de Nova Arca / Bastião de Prata-Média, Setor Militar da Parte Média',
    chronology: 'Era do Silício Negro, Ciclo 404 (Dia da Captura até 3 meses depois)',
    image: { src: baseMilitarImg, alt: 'O Keraunos chegando ao Bastião de Prata-Média, a base militar do setor da Parte Média' },
    paragraphs: [
      `A consciência de Vico retornou não com um solavanco, mas com uma dor latejante na base do crânio. O gosto de sangue e ozônio inundava sua boca. Ele piscou, a visão turva lutando para focar nas luzes azuis e frias do interior do Keraunos. O zumbido dos motores gravitacionais vibrava em seus ossos, enquanto os fechos rúnicos em seus pulsos queimavam a pele sempre que ele tentava se mover, anulando qualquer força motriz.`,

      `— Por que... por que eu ainda estou vivo? — A voz de Vico saiu áspera, rasgando a garganta seca.`,

      `Sargento Malakor estava de pé no final do compartimento de carga, imóvel como uma gárgula de obsidiana. Seus olhos térmicos brilharam através da penumbra.`,

      `— Você não achou que ia ser tão rápido assim, né? — A voz metálica de Malakor soou quase entediada, reverberando pelas paredes blindadas da nave. — A morte é um desperdício de recursos. O Conselho de Safira prefere reciclar. Nós vamos controlar sua mente, Vane. Precisamos de influência na Parte Baixa, e aparentemente a sua frequência rebelde te fez um pouco conhecido lá. Não é nenhuma grande estrela, mas dá pro gasto.`,

      `Vico arregalou os olhos, o choque momentaneamente superando a dor física.`,

      `— Como assim controlar minha mente?! Como vocês poderiam fazer isso? Magia de sangue? Lavagem cerebral? — Vico forçou os pulsos contra as algemas, fazendo as runas de contenção chiarem e soltarem faíscas.`,

      `— Magia de sangue é para bárbaros do passado — respondeu o sargento, aproximando-se a passos pesados. — É uma tecnologia nova, uma fusão de feitiçaria neural e microprocessamento que os Tecno-Mágicos querem testar em campo. Você não precisa saber mais do que isso. Sua mente será um rádio, e nós seremos a estação transmissora.`,

      `— Então vocês acham que podem me usar como um rato de laboratório? — Vico cuspiu as palavras com nojo. — Vocês vão pagar caro por isso. Se tocarem na minha mente, eu arranjo um jeito de implodir tudo de dentro pra fora.`,

      `— É o que vamos ver. Chegamos. — Malakor pressionou um comando em seu antebraço metálico e a rampa de carga começou a descer.`,

      `O vento tóxico invadiu a nave, mas o que assustou Vico não foi o ar, e sim a visão colossal à sua frente. O Bastião de Prata-Média. A base militar era algo inimaginável para quem vivia no lixo dos subúrbios. Muralhas que lembravam os antigos castelos de pedra negra erguiam-se aos céus, mas suas veias eram conduítes pulsantes de mana sintética em tom neon. Patrulhando os pátios, haviam guardas que eram pesadelos ambulantes: humanos com metade do rosto substituído por placas de aço ocular, empunhando alabardas que emitiam lâminas de plasma crepitante. A esperança de Vico despencou. Era uma fortaleza impenetrável; não havia como escapar dali.`,

      `Vico foi arrastado para fora, jogado em elevadores de gravidade e finalmente empurrado para dentro de uma câmara gélida e perfeitamente escura. O som de uma porta de puro titânio se selando ecoou com um baque surdo. Mãos frias o forçaram a sentar-se em uma cadeira de madeira pesada, cujas farpas arranhavam sua pele — um contraste cruel e primitivo com a alta tecnologia do lado de fora. Uma venda de tecido antissensorial foi apertada sobre seus olhos, mergulhando-o no vazio absoluto.`,

      `De repente, a temperatura da sala caiu drasticamente. A respiração de Vico virou fumaça. Ele sentiu uma presença se aproximar em meio à escuridão, deslizando sem produzir o som de passos. Um frio na espinha arrepiou todo o corpo do cantor. Havia um cheiro de formol e incenso queimado no ar.`,

      `— Olá, cobaia — sussurrou uma voz que parecia ecoar dentro da própria cabeça de Vico, andrógina e carregada de uma estática arcana. — Sinta-se lisonjeado por participar desta comunhão. O seu corpo falho será a tela onde pintaremos a perfeição. Você será um marco para a ciência imperial.`,

      `Antes que Vico pudesse xingar a figura invisível, ele sentiu a picada fria de uma agulha de injeção pneumática na lateral de seu pescoço. O sedativo bio-rúnico invadiu sua corrente sanguínea como gelo líquido. O mundo girou e Vico despencou no abismo do sono.`,

      `Na escuridão induzida, a mente de Vico fugiu para o único refúgio seguro que lhe restava. O cheiro de metal e podridão desapareceu, substituído pelo aroma doce de lavanda e terra molhada. Ele estava de pé em um campo vasto, salpicado de flores amarelas reais — não os hologramas baratos da cidade. O céu era de um azul límpido, sem rastros de fumaça industrial. Ao longe, correndo em sua direção com um sorriso que iluminava o mundo, estava sua antiga amada. O vestido branco dela esvoaçava ao vento natural. Ela o abraçou, e Vico sentiu o calor humano, a maciez da pele, a batida de um coração orgânico contra o seu. Era um sonho lindo, um vislumbre do paraíso enterrado no centro de seu pesadelo.`,

      `O despertar não foi gentil. Não houve solavanco, apenas a lenta e agonizante percepção de que o sonho havia acabado.`,

      `Vico abriu os olhos. O cheiro de lavanda foi substituído por antissépticos químicos. Ele piscou para a luz branca e esterilizada do teto de uma enfermaria laboratorial. Ele estava deitado em uma maca acolchoada e extremamente confortável. A princípio, não sentiu dor. Aparentemente, estava inteiro e são.`,

      `Mas essa falsa sensação de paz evaporou no momento em que ele tentou se levantar.`,

      `O som não era de músculos se contraindo, mas o zumbido agudo e sutil de servomotores girando. Vico ofegou, o pânico subindo por sua garganta. Ele jogou o lençol branco para o lado e olhou para o próprio corpo.`,

      `Onde deveria estar seu braço direito, havia agora um membro de liga de carbono e cromo polido. Cabos sintéticos imitavam tendões, e ao longo do antebraço, pequenas runas azuis brilhavam, alimentando o circuito da mão metálica. Horrorizado, ele olhou para baixo. Suas duas pernas originais também não existiam mais, amputadas acima dos joelhos e substituídas por próteses cibernéticas pesadas, projetadas para combate e resistência, não para a leveza de um ser humano.`,

      `Vico tentou gritar, mas a voz travou. Ele levou a mão humana que lhe restava para tocar o metal frio de sua nova coxa. Ele não era mais apenas carne e osso. Eles haviam roubado sua integridade física e possivelmente sua mente. Ele havia se tornado aquilo que as ruas da Parte Baixa mais temiam e odiavam. Um monstro do governo. Ele era agora um Híbrido.`,
    ],
  },
  {
    number: 3,
    slug: 'o-fantasma-na-maquina-runica',
    title: 'O Fantasma na Máquina Rúnica',
    location: 'Bastião de Prata-Média, Setor de Engenharia Biomágica',
    chronology: 'Era do Silício Negro, Ciclo 404',
    paragraphs: [
      `A respiração de Vico ecoava pelo quarto esterilizado, competindo com o zumbido quase inaudível dos servomotores em suas novas articulações de cromo. Ele encarava a mão metálica, abrindo e fechando os dedos afiados. O movimento era instantâneo, desprovido do atraso natural da carne. Cada engrenagem parecia banhada em uma fina camada de mana sintética, brilhando em um azul gélido sob as luzes de neon do teto. Ele não era mais apenas Vico Vane; ele era uma arma forjada nas entranhas do Bastião de Prata-Média.`,

      `Subitamente, um estalo seco ecoou na base de seu crânio, seguido pelo cheiro acre de cobre queimado dentro de suas próprias narinas.`,

      `Vico caiu de joelhos no piso de obsidiana polida, agarrando a cabeça com a mão humana e a metálica. Uma pequena lufada de fumaça escura e faíscas violetas escapou da cicatriz cirúrgica em sua nuca. O Selo Neural de Quartzo Negro, o protótipo que o Conselho de Safira havia implantado em seu córtex, havia colapsado. Era uma tecnologia primária, um teste jamais levado a estágios seguros de experimentação. O microchip, incapaz de processar simultaneamente o fluxo constante de feitiçaria neural e a torrente de diretrizes imperiais, sofreu um sobreaquecimento severo. Uma solda arcana microscópica simplesmente derreteu.`,

      `Foi um erro de engenharia puro e simples. O "firewall" de submissão caiu, e pelo espaço dessa falha de hardware, a represa de memórias suprimidas transbordou.`,

      `Ele não estivera dormindo nos últimos três meses. Ele estivera trabalhando.`,

      `O primeiro clarão de memória o atingiu como um soco cinético. Vico se viu de pé em um palco improvisado na praça central da Parte Baixa. A chuva ácida caía sobre seu sobretudo de couro impermeável. Uma multidão faminta e desesperada o assistia. E ele estava cantando. Mas as palavras que saíam de sua boca não eram de rebelião. A sua voz, amplificada por moduladores de frequência implantados em suas cordas vocais, entoava hinos de gratidão ao Governo. Ele falava sobre como a ordem e o trabalho duro nas fábricas de combustão rúnica trariam a salvação. Através dos olhos atônitos e traídos de seu próprio povo, Vico viu o monstro em que o haviam transformado: o maior propagandista da tirania que jurara destruir.`,

      `Antes que pudesse processar o asco, outra memória o invadiu, mais sombria, cheia de sangue e pólvora.`,

      `Ele estava em um beco estreito no Distrito de Bronze. Vestia uma armadura de assalto imperial tática. À sua frente, um contrabandista de peças rúnicas implorava por misericórdia. Vico assistiu, como um passageiro preso no banco de trás de sua própria mente, seu braço direito cibernético se erguer movido pelas diretrizes do sistema. A mão de cromo agarrou o pescoço do homem, erguendo-o do chão com a frieza de uma máquina operária. Houve um estalo úmido, e a vida deixou os olhos do contrabandista. Vico havia sido usado como um executor das sombras, limpando os rastros de corrupção para os lordes da Parte Alta.`,

      `A dor física na nuca de Vico cessou, dando lugar ao silêncio gelado de sua mente agora consciente e isolada. O hardware do implante estava frito, mas seus sistemas motores continuavam ativos. O governo achava que ele ainda era um drone operacional, mas a marionete havia acabado de ter seus fios cortados pela própria ferrugem do sistema.`,

      `Ele respirou fundo, absorvendo a frieza do ambiente. A tristeza e o nojo deram lugar a uma fúria calculista. O Sargento Malakor e o Conselho de Safira queriam um híbrido perfeito usando tecnologia não testada? Eles haviam criado um erro no sistema, e esse erro ia cobrar a conta.`,

      `Vico levantou-se. O equilíbrio em suas novas pernas cibernéticas já estava calibrado pelas missões que ele não lembrava ter feito. Ele caminhou até a porta de titânio maciço. Ao lado dela, um terminal de segurança projetava um teclado holográfico em linguagem arcana antiga.`,

      `Uma fuga usando a força chamaria a artilharia do Bastião e o desintegraria antes que chegasse ao pátio. Ele precisava ser um vírus silencioso.`,

      `Vico ergueu o braço direito. Com um comando mental intuitivo que sua nova anatomia estranhamente reconheceu, a ponta de seu dedo indicador metálico se dividiu com um clique suave. De dentro, emergiu um plugue de conexão neural banhado a ouro alquímico — a ferramenta de extração de dados que o Governo havia lhe dado para seus trabalhos de espionagem.`,

      `Ele inseriu o plugue no terminal da porta. A integração foi imediata. O olho esquerdo de Vico, que ele agora percebia ser uma lente protética recoberta de pele sintética, projetou em sua retina um fluxo contínuo de dados imperiais e runas decodificadas. Ele começou a enviar comandos de substituição, usando a mesma lógica de acordes dissonantes que aplicava em suas músicas de resistência, traduzidas agora para a linguagem binária do complexo.`,

      `Como a porta reconhecia a assinatura do plugue militar, ela não bloqueou a tentativa. O sistema engasgou, processou a anomalia silenciosamente e brilhou em verde esmeralda.`,

      `Com o sibilar abafado de pistões despressurizados, a chapa pesada deslizou para o lado, revelando um corredor mal iluminado, repleto de tubulações de mana pulsante. Vico retraiu a conexão para dentro do dedo metálico, ajustou a postura para imitar a marcha mecânica de um agente de segurança imperial, e deu o primeiro passo para fora da cela.`,
    ],
  },
]
