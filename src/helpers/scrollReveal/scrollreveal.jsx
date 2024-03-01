import sr from '../../utils/scrollReaveal/ScrollReveal'

export default function Revelar () {
    
return(

    sr.reveal('#tecnologias_cards', {
        distance: '150%',
        origin: 'left',
        opacity: null,
        duration: 1000,
        reset: true
    }),

    sr.reveal('#content_projetos', {
            distance: '150%',
            origin: 'left',
            opacity: null,
            duration: 1300,
            reset: true
    }),

    sr.reveal('.descrevendo-me', {
        distance: '150%',
        origin: 'rigth',
        opacity: null,
        duration: 1300,
        reset: true
    }),

    sr.reveal('.nome-habilidade',
    {distance: '20%', origin: 'right', duration: 1000, delay:500, reset: true}),

    sr.reveal('.barra-cinza',
    {distance: '20%', origin: 'right', duration: 1000, delay:500, reset: true}),

    sr.reveal('#hab1',
    {distance: '-110%', opacity: null, origin: 'rigth', duration: 2000, delay:1000, reset: true}),

    sr.reveal('#hab2',
    {distance: '-110%', opacity: null, origin: 'rigth', duration: 2000, delay:1300, reset: true}),

    sr.reveal('#hab3',
    {distance: '-110%', opacity: null, origin: 'rigth', duration: 2000, delay:1600, reset: true}),

    sr.reveal('#hab4',
    {distance: '-110%', opacity: null, origin: 'rigth', duration: 2000, delay:1900, reset: true}),

    sr.reveal("#ola", {distance: '200%', origin: 'right', duration: 1000, reset: true}),
    sr.reveal("#meu_nome", {distance: '200%', origin: 'left', duration: 1200, reset: true}),
    sr.reveal("#desenvolvedor", {distance: '200%', origin: 'left', duration: 1400, reset: true}),
    sr.reveal("#auto_descricao", {distance: '200%', origin: 'left', duration: 1600, reset: true}),
    sr.reveal("#btn_mais", {distance: '200%', origin: 'left', duration: 1800, reset: true})

)}