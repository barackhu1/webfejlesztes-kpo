function update(id, szoveg) {
    uj_eredmeny = parseInt(document.getElementById(id).innerHTML) + 1
    document.getElementById(id).innerHTML = uj_eredmeny
    document.getElementById('ki_nyert').innerHTML = szoveg
}

function nyertes(forma1, forma2) {
    if (forma1 == forma2) {
        update('dontetlen', "Döntetlen!")
    } else if ((forma1 == "ko" && forma2 == "ollo") ||
        (forma1 == "papir" && forma2 == "ko") ||
        (forma1 == "ollo" && forma2 == "papir")) {
        update('eredmeny_ember', "Nyertél!")
    } else {
        update('eredmeny_gep', "Vesztettél!")
    }
}

function class_csere(forma) {
    var startsWith = "icon"
    var icon = document.getElementById("change")
    var classes = icon.className.split(" ").filter(function (v) {
        return v.lastIndexOf(startsWith, 0) !== 0
    })
    icon.className = classes.join(" ").trim()
    document.getElementById("change").classList.add("icon-" + forma)
}

function jatsz(forma) {
    var formak = ['ko', 'papir', 'ollo']
    const randomIndex = Math.floor(Math.random() * formak.length)
    ellenseg_forma = formak[randomIndex]
    class_csere(ellenseg_forma)
    nyertes(forma, ellenseg_forma)
}