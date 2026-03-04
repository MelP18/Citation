/*=====================================++> DARK MODE <====================================*/
const quoted = document.querySelector('.quote');
const lune = document.querySelector('.quote__day span.mdi-moon-waning-crescent');
const sun = document.querySelector('.quote__day span.mdi-weather-sunny');

const darkMode = window.matchMedia('(prefers-color-scheme: dark)');

// Fonction pour appliquer le thème
function setDarkTheme() {
    quoted.classList.add('active');
    quoted.classList.remove('light');

    lune.style.display = "none";
    sun.style.display = "inline-block";
}

function setLightTheme() {
    quoted.classList.remove('active');
    quoted.classList.add('light');

    lune.style.display = "inline-block";
    sun.style.display = "none";
}

// Détection système au chargement
if (darkMode.matches) {
    setDarkTheme();
} else {
    setLightTheme();
}

// Écoute changement système
darkMode.addEventListener('change', (e) => {
    if (e.matches) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});

// Clic sur lune → passer en dark
lune.addEventListener('click', () => {
    setDarkTheme();
});

// Clic sur soleil → passer en light
sun.addEventListener('click', () => {
    setLightTheme();
});

/*=======================================> DATE <=================================*/
let date = new Date ();
let showDate = document.querySelector('.quote__day .date')
let newDate  = date.toLocaleString('fr-FR',{
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
})
showDate.innerHTML += newDate

const citations = [
    [
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).jpg",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).jpg",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).jpeg",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).webp",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
    ]
]
const images = [
    [
        {
            image: "/Images/image(1).png"
        },
        {
            image: "/Images/image(2).png"
        },
        {
            image: "/Images/image(3).png"
        },
        {
            image: "/Images/image(4).png"
        },
        {
            image: "/Images/image(5).png"
        },
        {
            image: "/Images/image(6).png"
        },
        {
            image: "/Images/image(7).png"
        },
        {
            image: "/Images/image(8).jpg"
        },
        {
            image: "/Images/image(9).jpeg"
        },
        {
            image: "/Images/image(10).jpg"
        },
        {
            image: "/Images/image(11).webp"
        },
        
    ]
]



/*===============================> QUOTE <==================================*/
function aleatoireRandom (a) {
    return a[Math.floor(Math.random() * a.length)];
}
const quote = document.querySelector('.quote__info')
var quoteTab = []
if(citations ){
    citations[0].forEach(item =>{
        const quoteLeft = 
        `
        
        <div class="quote__sentences">
            <div class="quote__right__img">
                <img src="${item.image_url}" alt="quote_img">
            </div>
            <blockquote id="quote"> ${item.description} </blockquote>
            <div class="quote__author">
                <cite>~ ${item.author} ~</cite>
            </div>
        </div>
        `
        quoteTab.push(quoteLeft)
      /*   console.log(quoteTab); */
        })

    quote.innerHTML = aleatoireRandom(quoteTab) 
    /* <div class="quote__right__img">
            <img src=""${item.image_url}" alt="">
        </div> */
}
/*===============================> IMAGE ALEATOIRE <==================================*/
 const quoteImg = document.querySelector('.quote__right__img')
var quoteImgTab = []
if(images){
    images[0].forEach(item =>{
        const quoteRightImg = `<img src="${item.image}" alt="">`
        quoteImgTab.push(quoteRightImg)
    })
    aleatoireRandom(quoteImgTab)
    quoteImg.innerHTML=(aleatoireRandom(quoteImgTab))
}
/*===============================> REFRESH BTN <==================================*/
const btnReset = document.querySelector('.refresh-btn')

if(btnReset){
    btnReset.addEventListener('click', (e) => {
        e.preventDefault()
        quote.innerHTML = aleatoireRandom(quoteTab)
    } )
}

/*===============================> GET QUOTES <==================================*/

document.querySelector('.quote__sentences')
  .addEventListener('contextmenu', e => e.preventDefault());

  const copyBtn = document.getElementById('copyBtn');

// copyBtn.addEventListener('click', () => {
//     const text = document.getElementById('quote').innerText;

//     navigator.clipboard.writeText(text)
//         .then(() => {
//             alert("Citation copiée !");
//         })
//         .catch(err => {
//             console.error("Erreur de copie :", err);
//         });
// });



// copyBtn.addEventListener('click', async () => {
//     const text = document.getElementById('quote').innerText;
//     await navigator.clipboard.writeText(text);

//     copyBtn.innerHTML = "✔";
//     setTimeout(() => {
//         copyBtn.innerHTML = '<span class="mdi mdi-content-copy"></span>';
//     }, 1500);
// });


const icon = copyBtn; // récupère le span existant
console.log('icon :>> ', icon);

copyBtn.addEventListener('click', async () => {
    const text = document.getElementById('quote').innerText;

    try {
        await navigator.clipboard.writeText(text);

        // remplace l'icône copy par check
        icon.classList.remove('mdi-content-copy');
        icon.classList.add('mdi-check');

        // après 1.5s on remet l'icône copy
        setTimeout(() => {
            icon.classList.remove('mdi-check');
            icon.classList.add('mdi-content-copy');
        }, 1500);
    } catch (err) {
        console.error("Erreur de copie :", err);
    }
});