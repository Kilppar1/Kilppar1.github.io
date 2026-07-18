const kysymykset = [
    {
        kysymys: "Minkä jälkiruoan valitset?",
        vastaukset: [
            { teksti: "Suklaakakku", pisteet: { Nalle: 1, Vaikku: 1 } },
            { teksti: "Mustikkajäätelö", pisteet: { Nipa: 1, Napi: 1 } },
            { teksti: "Mansikkakakku", pisteet: { Nallukka: 1 } },
            { teksti: "Kaktusjäätelö", pisteet: { Piikki: 1, Jorma: 1 } }
        ]
    },
    {
        kysymys: "Mikä väri miellyttää sinua eniten?",
        vastaukset: [
            { teksti: "Rokkaava vihreä", pisteet: { Piikki: 1, Jorma: 1 } },
            { teksti: "Lämmin vaaleanruskea", pisteet: { Nalle: 1, Vaikku: 1 } },
            { teksti: "Pirteä vaaleanpunainen", pisteet: { Nallukka: 1 } },
            { teksti: "Kuninkaallinen sininen", pisteet: { Nipa: 1, Napi: 1 } }
        ]
    },
    {
        kysymys: "Mikä on lempivuodenaikasi?",
        vastaukset: [
            { teksti: "Talvi", pisteet: { Nalle: 1, Jorma: 1 } },
            { teksti: "Kevät", pisteet: { Piikki: 1 } },
            { teksti: "Kesä", pisteet: { Nallukka: 1, Napi: 1 } },
            { teksti: "Syksy", pisteet: { Nipa: 1, Vaikku: 1 } }
        ]
    },
    {
        kysymys: "Mitä teet sadepäivänä?",
        vastaukset: [
            { teksti: "Leikin sisällä", pisteet: { Nallukka: 1, Napi: 1 } },
            { teksti: "Jään sänkyyn", pisteet: { Nalle: 1 } },
            { teksti: "Luen kirjaa", pisteet: { Nipa: 1, Vaikku: 1 } },
            { teksti: "Hyppelen lätäköissä", pisteet: { Piikki: 1, Jorma: 1 } }
        ]
    },
    {
        kysymys: "Mitä ottaisit mukaan autiolle saarelle?",
        vastaukset: [
            { teksti: "Sähkökitaran", pisteet: { Jorma: 1 } },
            { teksti: "Kirjan", pisteet: { Nipa: 1, Vaikku: 1 } },
            { teksti: "Karkkipussin", pisteet: { Nalle: 1, Piikki: 1 } },
            { teksti: "Pehmolelun", pisteet: { Nallukka: 1, Napi: 1 } }
        ]
    },
    {
        kysymys: "Miten teet rentoutuaksesi?",
        vastaukset: [
            { teksti: "Kävelen luonnossa", pisteet: { Piikki: 1, Napi: 1 } },
            { teksti: "Menen kalaan", pisteet: { Nalle: 1, Vaikku: 1 } },
            { teksti: "Tanssin ja lauleskelen", pisteet: { Nallukka: 1, Jorma: 1 } },
            { teksti: "Luen kirjaa", pisteet: { Nipa: 1 } }
        ]
    },
    {
        kysymys: "Kuinka aikaisin aloitat pakkaamaan matkalle?",
        vastaukset: [
            { teksti: "Kuukausi ennen matkaa", pisteet: { Nipa: 1 } },
            { teksti: "Viikkoa ennen matkaa", pisteet: { Nalle: 1, Vaikku: 1 } },
            { teksti: "Päivää ennen matkaa", pisteet: { Piikki: 1, Jorma: 1 } },
            { teksti: "Lähtöaamuna", pisteet: { Nallukka: 1, Napi: 1 } }
        ]
    },
    {
        kysymys: "Entä minne matkasi suuntautuisi?",
        vastaukset: [
            { teksti: "Idylliseen kaupunkiin", pisteet: { Nallukka: 1, Vaikku: 1 } },
            { teksti: "Lähiseudulle, ei liian kauas kotoa", pisteet: { Nalle: 1, Napi: 1 } },
            { teksti: "Pohjoisnavalle", pisteet: { Nipa: 1 } },
            { teksti: "Aavikot kiinnostavat minua", pisteet: { Piikki: 1, Jorma: 1 } }
        ]
    },
    {
        kysymys: "Mitä kaiuttimistasi kuuluu kotona?",
        vastaukset: [
            { teksti: "Menevää pop-musiikkia", pisteet: { Nallukka: 1, Vaikku: 1 } },
            { teksti: "Klassista musiikkia", pisteet: { Napi: 1 } },
            { teksti: "Raskasta musiikkia", pisteet: { Nalle: 1, Jorma: 1, Piikki: 1 } },
            { teksti: "Merisää", pisteet: { Nipa: 1 } }
        ]
    },
    {
        kysymys: "Oletko kiinnostunut vaikuttamaan asioihin?",
        vastaukset: [
            { teksti: "Kyllä, olen hyvin kiinnostunut politiikasta", pisteet: { Nipa: 1, Piikki: 1 } },
            { teksti: "Putsaan korvani vaikusta säännöllisesti", pisteet: { Vaikku: 1 } },
            { teksti: "Haluan vaikuttaa päivälliseen", pisteet: { Nalle: 1, Nallukka: 1 } },
            { teksti: "Pidän huolen vain omista asioistani", pisteet: { Napi: 1, Jorma: 1 } }
        ]
    }
];

let i = 0;

let pisteet = {
    Nalle: 0,
    Nallukka: 0,
    Nipa: 0,
    Piikki: 0,
    Vaikku: 0,
    Napi: 0,
    Jorma: 0
};

const kysymysLaatikko = document.getElementById("kysymys");
const vastausLaatikko = document.getElementById("vastaukset");
const tulosLaatikko = document.getElementById("tulos");

function naytaKysymys() {
    const kysymys = kysymykset[i];

    kysymysLaatikko.innerHTML = `<h2>${kysymys.kysymys}</h2>`;
    vastausLaatikko.innerHTML = "";

    kysymys.vastaukset.forEach(vastaus => {
        const nappi = document.createElement("button");
        nappi.textContent = vastaus.teksti;

        nappi.onclick = () => {
            Object.entries(vastaus.pisteet).forEach(([hahmo, maara]) => {
                pisteet[hahmo] += maara;
            });

            i++;

            if (i < kysymykset.length) {
                naytaKysymys();
            } else {
                naytaTulos();
            }
        };

        vastausLaatikko.appendChild(nappi);
    });
}

function naytaTulos() {
    const voittaja = Object.keys(pisteet).reduce((a, b) =>
        pisteet[a] > pisteet[b] ? a : b
    );

    kysymysLaatikko.innerHTML = "";
    vastausLaatikko.innerHTML = "";

    let teksti = "";
    let kuva = "";

    if (voittaja == "Nalle") {
        teksti = "Viihdyt kotona ja olet hieman herkkusuu.";
        kuva = "../kuvat/hahmot/nalle.png";
    }
    else if (voittaja == "Nallukka") {
        teksti = "Olet pirteä ja vauhdikas persoona.";
        kuva = "../kuvat/hahmot/nallukka.png";
    }
    else if (voittaja == "Nipa") {
        teksti = "Olet pohtiva ja arvostat tietoa.";
        kuva = "../kuvat/hahmot/nipa.png";
    }
    else if (voittaja == "Piikki") {
        teksti = "Olet hieman piikikäs, mutta kuitenkin ystävällinen.";
        kuva = "../kuvat/hahmot/piikki.png";
    }
    else if (voittaja == "Vaikku") {
        teksti = "Et ohita tilaisuutta vaikuttaa asioihin. Sinulla kuluu paljon korvapuikkoja.";
        kuva = "../kuvat/hahmot/vaikku.png";
    }
    else if (voittaja == "Napi") {
        teksti = "Olet rento, huoleton ja siisti tyyppi.";
        kuva = "../kuvat/hahmot/napi.png";
    }
    else if (voittaja == "Jorma") {
        teksti = "Olet vauhdikas rämäpää, joka pitää menosta ja melskeestä.";
        kuva = "../kuvat/hahmot/jorma.png";
    }

    tulosLaatikko.innerHTML = `
        <h2>Olet kuin ${voittaja}!</h2>
        <img src="${kuva}" alt="${voittaja}">
        <p>${teksti}</p>
        <button onclick="location.reload()">Pelaa uudestaan</button>
    `;
}

naytaKysymys();