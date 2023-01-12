// TABLE FOR ESTABLISHED LINKS

function genSprite(pokemon) {
    return (
    <img 
     src={('https://img.pokemondb.net/sprites/scarlet-violet/normal/' + pokemon + '.png')} 
     alt={pokemon}
     style={{height:'70px'}}
     />
    )
}

export const EstablishedLinkTable = () => {

    return (
        <table className='default-links-table'>
            <colgroup>
                <col style={{background:'black', width:'20%'}}/>
                <col style={{background:'#5C0C00'}}/>
                <col style={{background: '#22003A'}}/>
            </colgroup>
            <thead>
                <tr>
                    <th>Link code</th>
                    <th>Pokemon 1</th>
                    <th>Pokemon 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 4448-4448 </td>
                    <td> {genSprite('ditto')} Ditto </td>
                    <td> {genSprite('ditto')} Ditto </td>
                </tr>
                <tr>
                    <td> 0001-0004 </td>
                    <td> {genSprite('sprigatito')} Sprigatito </td>
                    <td> {genSprite('fuecoco')} Fuecoco </td>
                </tr>
                <tr>
                    <td> 0001-0007 </td>
                    <td> {genSprite('sprigatito')} Sprigatito </td>
                    <td> {genSprite('quaxly')} Quaxly </td>
                </tr>
                <tr>
                    <td> 0004-0007 </td>
                    <td> {genSprite('fuecoco')} Fuecoco </td>
                    <td> {genSprite('quaxly')} Quaxly </td>
                </tr>
                <tr>
                    <td> 0143-0114 </td>
                    <td> {genSprite('drifloon')} Drifloon </td>
                    <td> {genSprite('misdreavus')} Misdreavus </td>
                </tr>
                <tr>
                    <td> 0227-0140 </td>
                    <td> {genSprite('stunky')} Stunky </td>
                    <td> {genSprite('gulpin')} Gulpin </td>
                </tr>
                <tr>
                    <td> 0166-0167 </td>
                    <td> {genSprite('armarouge')} Armarouge </td>
                    <td> {genSprite('ceruledge')} Ceruledge </td>
                </tr>
                <tr>
                    <td> 0223-0223 </td>
                    <td> {genSprite('tauros')} Tauros (Fire) </td>
                    <td> {genSprite('tauros')} Tauros (Water) </td>
                </tr>
                <tr>
                    <td> 0316-0276 </td>
                    <td> {genSprite('larvitar')} Larvitar </td>
                    <td> {genSprite('bagon')} Bagon </td>
                </tr>
                <tr>
                    <td> 0370-0305 </td>
                    <td> {genSprite('deino')} Deino </td>
                    <td> {genSprite('dreepy')} Dreepy </td>
                </tr>
                <tr>
                    <td> 0313-0314 </td>
                    <td> {genSprite('oranguru')} Oranguru </td>
                    <td> {genSprite('passimian')} Passimian </td>
                </tr>
                <tr>
                    <td> 0319-0320 </td>
                    <td> {genSprite('stonjourner')} Stonjourner </td>
                    <td> {genSprite('eiscue')} Eiscue </td>
                </tr>
                <tr>
                    <td> 0337-0339 </td>
                    <td> {genSprite('skrelp')} Skrelp </td>
                    <td> {genSprite('clauncher')} Clauncher </td>
                </tr>
                <tr>
                    <td> 0376-0382 </td>
                    <td> {genSprite('great-tusk')} Great Tusk </td>
                    <td> {genSprite('iron-treads')} Iron Treads </td>
                </tr>
                <tr>
                    <td> 0377-0383 </td>
                    <td> {genSprite('scream-tail')} Scream Tail </td>
                    <td> {genSprite('iron-bundle')} Iron Bundle </td>
                </tr>
                <tr>
                    <td> 0378-0384 </td>
                    <td> {genSprite('brute-bonnet')} Brute Bonnet </td>
                    <td> {genSprite('iron-hands')} Iron Hands </td>
                </tr>
                <tr>
                    <td> 0379-0385 </td>
                    <td> {genSprite('flutter-mane')} Flutter Mane </td>
                    <td> {genSprite('iron-jugulis')} Iron Jugulis </td>
                </tr>
                <tr>
                    <td> 0380-0386 </td>
                    <td> {genSprite('slither-wing')} Slither Wing </td>
                    <td> {genSprite('iron-moth')} Iron Moth </td>
                </tr>
                <tr>
                    <td> 0381-0387 </td>
                    <td> {genSprite('sandy-shocks')} Sandy Shocks </td>
                    <td> {genSprite('iron-thorns')} Iron Thorns </td>
                </tr>
                <tr>
                    <td> 0397-0398 </td>
                    <td> {genSprite('roaring-moon')} Roaring Moon </td>
                    <td> {genSprite('iron-valiant')} Iron Valiant </td>
                </tr>
                <tr>
                    <td> 0399-0400 </td>
                    <td> {genSprite('koraidon')} Koraidon </td>
                    <td> {genSprite('miraidon')} Miraidon </td>
                </tr>
            </tbody>
        </table>
    )
}

// Selection options for dropdowns

export const starOptions = [
    {value: 1, label: '1 ★'},
    {value: 2, label: '2 ★'},
    {value: 3, label: '3 ★'},
    {value: 4, label: '4 ★'},
    {value: 5, label: '5 ★'},
    {value: 6, label: '6 ★'},
];

export const teraOptions = [
    {value: 1, label: 'Bug'},
    {value: 2, label: 'Dark'},
    {value: 3, label: 'Dragon'},
    {value: 4, label: 'Electric'},
    {value: 5, label: 'Fairy'},
    {value: 6, label: 'Fighting'},
    {value: 7, label: 'Fire'},
    {value: 8, label: 'Flying'},
    {value: 9, label: 'Ghost'},
    {value: 10, label: 'Grass'},
    {value: 11, label: 'Ground'},
    {value: 12, label: 'Ice'},
    {value: 13, label: 'Normal'},
    {value: 14, label: 'Poison'},
    {value: 15, label: 'Psychic'},
    {value: 16, label: 'Rock'},
    {value: 17, label: 'Steel'},
    {value: 18, label: 'Water'},
];

export const pokemonOptions = [
    { value: 1, label: 'Abomasnow' },
    { value: 2, label: 'Alomomola' },
    { value: 3, label: 'Altaria' },
    { value: 4, label: 'Amoonguss' },
    { value: 5, label: 'Ampharos' },
    { value: 6, label: 'Annihilape' },
    { value: 7, label: 'Appletun' },
    { value: 8, label: 'Applin' },
    { value: 9, label: 'Arboliva' },
    { value: 10, label: 'Arcanine' },
    { value: 11, label: 'Armarouge' },
    { value: 12, label: 'Arrokuda' },
    { value: 13, label: 'Avalugg' },
    { value: 14, label: 'Axew' },
    { value: 15, label: 'Azumarill' },
    { value: 16, label: 'Azurill' },
    { value: 17, label: 'Bagon' },
    { value: 18, label: 'Banette' },
    { value: 19, label: 'Barboach' },
    { value: 20, label: 'Barraskewda' },
    { value: 21, label: 'Basculin' },
    { value: 22, label: 'Baxcalibur' },
    { value: 23, label: 'Beartic' },
    { value: 24, label: 'Bellibolt' },
    { value: 25, label: 'Bergmite' },
    { value: 26, label: 'Bisharp' },
    { value: 27, label: 'Blissey' },
    { value: 28, label: 'Bombirdier' },
    { value: 29, label: 'Bonsly' },
    { value: 30, label: 'Bounsweet' },
    { value: 31, label: 'Brambleghast' },
    { value: 32, label: 'Bramblin' },
    { value: 33, label: 'Braviary' },
    { value: 34, label: 'Breloom' },
    { value: 35, label: 'Bronzong' },
    { value: 36, label: 'Bronzor' },
    { value: 37, label: 'Bruxish' },
    { value: 38, label: 'Buizel' },
    { value: 39, label: 'Cacnea' },
    { value: 40, label: 'Cacturne' },
    { value: 41, label: 'Camerupt' },
    { value: 42, label: 'Capsakid' },
    { value: 43, label: 'Carkol' },
    { value: 44, label: 'Ceruledge' },
    { value: 45, label: 'Cetitan' },
    { value: 46, label: 'Cetoddle' },
    { value: 47, label: 'Chansey' },
    { value: 48, label: 'Charcadet' },
    { value: 49, label: 'Chewtle' },
    { value: 50, label: 'Clauncher' },
    { value: 51, label: 'Clawitzer' },
    { value: 52, label: 'Clodsire' },
    { value: 53, label: 'Cloyster' },
    { value: 54, label: 'Coalossal' },
    { value: 55, label: 'Combee' },
    { value: 56, label: 'Copperajah' },
    { value: 57, label: 'Corviknight' },
    { value: 58, label: 'Corvisquire' },
    { value: 59, label: 'Crabominable' },
    { value: 60, label: 'Crabrawler' },
    { value: 61, label: 'Croagunk' },
    { value: 62, label: 'Cryogonal' },
    { value: 63, label: 'Cubchoo' },
    { value: 64, label: 'Cufant' },
    { value: 65, label: 'Cyclizar' },
    { value: 66, label: 'Dachsbun' },
    { value: 67, label: 'Dedenne' },
    { value: 68, label: 'Deerling' },
    { value: 69, label: 'Deino' },
    { value: 70, label: 'Delibird' },
    { value: 71, label: 'Diglett' },
    { value: 72, label: 'Ditto' },
    { value: 73, label: 'Dolliv' },
    { value: 74, label: 'Dondozo' },
    { value: 75, label: 'Donphan' },
    { value: 76, label: 'Dragalge' },
    { value: 77, label: 'Dragapult' },
    { value: 78, label: 'Dragonair' },
    { value: 79, label: 'Dragonite' },
    { value: 80, label: 'Drakloak' },
    { value: 81, label: 'Dratini' },
    { value: 82, label: 'Drednaw' },
    { value: 83, label: 'Dreepy' },
    { value: 84, label: 'Drifblim' },
    { value: 85, label: 'Drifloon' },
    { value: 86, label: 'Drowzee' },
    { value: 87, label: 'Dudunsparce' },
    { value: 88, label: 'Dugtrio' },
    { value: 89, label: 'Dunsparce' },
    { value: 90, label: 'Eelektrik' },
    { value: 91, label: 'Eelektross' },
    { value: 92, label: 'Eevee' },
    { value: 93, label: 'Eiscue' },
    { value: 94, label: 'Electrode' },
    { value: 95, label: 'Espathra' },
    { value: 96, label: 'Espeon' },
    { value: 97, label: 'Falinks' },
    { value: 98, label: 'Farigiraf' },
    { value: 99, label: 'Fidough' },
    { value: 100, label: 'Finizen' },
    { value: 101, label: 'Finneon' },
    { value: 102, label: 'Flaaffy' },
    { value: 103, label: 'Flabebe' },
    { value: 104, label: 'Flamigo' },
    { value: 105, label: 'Flapple' },
    { value: 106, label: 'Flareon' },
    { value: 107, label: 'Fletchinder' },
    { value: 108, label: 'Fletchling' },
    { value: 109, label: 'Flittle' },
    { value: 110, label: 'Floatzel' },
    { value: 111, label: 'Florges' },
    { value: 112, label: 'Fomantis' },
    { value: 113, label: 'Foongus' },
    { value: 114, label: 'Forretress' },
    { value: 115, label: 'Fraxure' },
    { value: 116, label: 'Frigibax' },
    { value: 117, label: 'Froslass' },
    { value: 118, label: 'Frosmoth' },
    { value: 119, label: 'Gabite' },
    { value: 120, label: 'Gallade' },
    { value: 121, label: 'Garchomp' },
    { value: 122, label: 'Gardevoir' },
    { value: 123, label: 'Garganacl' },
    { value: 124, label: 'Gastly' },
    { value: 125, label: 'Gastrodon' },
    { value: 126, label: 'Gengar' },
    { value: 127, label: 'Gible' },
    { value: 128, label: 'Girafarig' },
    { value: 129, label: 'Glaceon' },
    { value: 130, label: 'Glalie' },
    { value: 131, label: 'Glimmet' },
    { value: 132, label: 'Glimmora' },
    { value: 133, label: 'Gogoat' },
    { value: 134, label: 'Golduck' },
    { value: 135, label: 'Goodra' },
    { value: 136, label: 'Goomy' },
    { value: 137, label: 'Gothita' },
    { value: 138, label: 'Gothitelle' },
    { value: 139, label: 'Gothorita' },
    { value: 140, label: 'Grafaiai' },
    { value: 141, label: 'Greavard' },
    { value: 142, label: 'Greedent' },
    { value: 143, label: 'Grimer' },
    { value: 144, label: 'Grimmsnarl' },
    { value: 145, label: 'Growlithe' },
    { value: 146, label: 'Grumpig' },
    { value: 147, label: 'Gulpin' },
    { value: 148, label: 'Gumshoos' },
    { value: 149, label: 'Gyarados' },
    { value: 150, label: 'Hariyama' },
    { value: 151, label: 'Hatenna' },
    { value: 152, label: 'Hatterene' },
    { value: 153, label: 'Hattrem' },
    { value: 154, label: 'Haunter' },
    { value: 155, label: 'Hawlucha' },
    { value: 156, label: 'Haxorus' },
    { value: 157, label: 'Heracross' },
    { value: 158, label: 'Hippopotas' },
    { value: 159, label: 'Hippowdon' },
    { value: 160, label: 'Honchkrow' },
    { value: 161, label: 'Hoppip' },
    { value: 162, label: 'Houndoom' },
    { value: 163, label: 'Houndour' },
    { value: 164, label: 'Houndstone' },
    { value: 165, label: 'Hydreigon' },
    { value: 166, label: 'Hypno' },
    { value: 167, label: 'Igglybuff' },
    { value: 168, label: 'Impidimp' },
    { value: 169, label: 'Indeedee' },
    { value: 170, label: 'Jigglypuff' },
    { value: 171, label: 'Jolteon' },
    { value: 172, label: 'Kilowattrel' },
    { value: 173, label: 'Kingambit' },
    { value: 174, label: 'Kirlia' },
    { value: 175, label: 'Klawf' },
    { value: 176, label: 'Komala' },
    { value: 177, label: 'Kricketot' },
    { value: 178, label: 'Kricketune' },
    { value: 179, label: 'Krokorok' },
    { value: 180, label: 'Krookodile' },
    { value: 181, label: 'Larvesta' },
    { value: 182, label: 'Larvitar' },
    { value: 183, label: 'Leafeon' },
    { value: 184, label: 'Lechonk' },
    { value: 185, label: 'Lilligant' },
    { value: 186, label: 'Litleo' },
    { value: 187, label: 'Lokix' },
    { value: 188, label: 'Lumineon' },
    { value: 189, label: 'Lurantis' },
    { value: 190, label: 'Luvdisc' },
    { value: 191, label: 'Luxio' },
    { value: 192, label: 'Luxray' },
    { value: 193, label: 'Lycanroc' },
    { value: 194, label: 'Mabosstiff' },
    { value: 195, label: 'Magikarp' },
    { value: 196, label: 'Magnemite' },
    { value: 197, label: 'Magneton' },
    { value: 198, label: 'Magnezone' },
    { value: 199, label: 'Makuhita' },
    { value: 200, label: 'Mankey' },
    { value: 201, label: 'Mareanie' },
    { value: 202, label: 'Mareep' },
    { value: 203, label: 'Marill' },
    { value: 204, label: 'Maschiff' },
    { value: 205, label: 'Masquerain' },
    { value: 206, label: 'Maushold' },
    { value: 207, label: 'Medicham' },
    { value: 208, label: 'Meditite' },
    { value: 209, label: 'Meowth' },
    { value: 210, label: 'Mimikyu' },
    { value: 211, label: 'Misdreavus' },
    { value: 212, label: 'Mismagius' },
    { value: 213, label: 'Morgrem' },
    { value: 214, label: 'Mudbray' },
    { value: 215, label: 'Mudsdale' },
    { value: 216, label: 'Muk' },
    { value: 217, label: 'Murkrow' },
    { value: 218, label: 'Nacli' },
    { value: 219, label: 'Naclstack' },
    { value: 220, label: 'Noibat' },
    { value: 221, label: 'Noivern' },
    { value: 222, label: 'Numel' },
    { value: 223, label: 'Nymble' },
    { value: 224, label: 'Oinkologne' },
    { value: 225, label: 'Oranguru' },
    { value: 226, label: 'Oricorio' },
    { value: 227, label: 'Orthworm' },
    { value: 228, label: 'Pachirisu' },
    { value: 229, label: 'Palafin' },
    { value: 230, label: 'Passimian' },
    { value: 231, label: 'Pawmi' },
    { value: 232, label: 'Pawmo' },
    { value: 233, label: 'Pawmot' },
    { value: 234, label: 'Pawniard' },
    { value: 235, label: 'Pelipper' },
    { value: 236, label: 'Persian' },
    { value: 237, label: 'Petilil' },
    { value: 238, label: 'Phanpy' },
    { value: 239, label: 'Pichu' },
    { value: 240, label: 'Pikachu' },
    { value: 241, label: 'Pincurchin' },
    { value: 242, label: 'Pineco' },
    { value: 243, label: 'Polteageist' },
    { value: 244, label: 'Primeape' },
    { value: 245, label: 'Psyduck' },
    { value: 246, label: 'Pupitar' },
    { value: 247, label: 'Pyroar' },
    { value: 248, label: 'Qwilfish' },
    { value: 249, label: 'Rabsca' },
    { value: 250, label: 'Raichu' },
    { value: 251, label: 'Ralts' },
    { value: 252, label: 'Rellor' },
    { value: 253, label: 'Revavroom' },
    { value: 254, label: 'Riolu' },
    { value: 255, label: 'Rockruff' },
    { value: 256, label: 'Rolycoly' },
    { value: 257, label: 'Rookidee' },
    { value: 258, label: 'Rotom' },
    { value: 259, label: 'Rufflet' },
    { value: 260, label: 'Sableye' },
    { value: 261, label: 'Salamence' },
    { value: 262, label: 'Salandit' },
    { value: 263, label: 'Sandaconda' },
    { value: 264, label: 'Sandile' },
    { value: 265, label: 'Sandygast' },
    { value: 266, label: 'Sawsbuck' },
    { value: 267, label: 'Scizor' },
    { value: 268, label: 'Scovillain' },
    { value: 269, label: 'Scyther' },
    { value: 270, label: 'Seviper' },
    { value: 271, label: 'Shelgon' },
    { value: 272, label: 'Shellder' },
    { value: 273, label: 'Shellos' },
    { value: 274, label: 'Shinx' },
    { value: 275, label: 'Shroodle' },
    { value: 276, label: 'Shroomish' },
    { value: 277, label: 'Shuppet' },
    { value: 278, label: 'Silicobra' },
    { value: 279, label: 'Sinistea' },
    { value: 280, label: 'Skiddo' },
    { value: 281, label: 'Skiploom' },
    { value: 282, label: 'Skrelp' },
    { value: 283, label: 'Skuntank' },
    { value: 284, label: 'Skwovet' },
    { value: 285, label: 'Slaking' },
    { value: 286, label: 'Slakoth' },
    { value: 287, label: 'Sliggoo' },
    { value: 288, label: 'Slowbro' },
    { value: 289, label: 'Slowking' },
    { value: 290, label: 'Slowpoke' },
    { value: 291, label: 'Smoliv' },
    { value: 292, label: 'Sneasel' },
    { value: 293, label: 'Snom' },
    { value: 294, label: 'Snorunt' },
    { value: 295, label: 'Snover' },
    { value: 296, label: 'Spoink' },
    { value: 297, label: 'Squawkabilly' },
    { value: 298, label: 'Stantler' },
    { value: 299, label: 'Staraptor' },
    { value: 300, label: 'Staravia' },
    { value: 301, label: 'Starly' },
    { value: 302, label: 'Steenee' },
    { value: 303, label: 'Stonjourner' },
    { value: 304, label: 'Stunky' },
    { value: 305, label: 'Sudowoodo' },
    { value: 306, label: 'Sunflora' },
    { value: 307, label: 'Sunkern' },
    { value: 308, label: 'Surskit' },
    { value: 309, label: 'Swablu' },
    { value: 310, label: 'Swalot' },
    { value: 311, label: 'Sylveon' },
    { value: 312, label: 'Tadbulb' },
    { value: 313, label: 'Talonflame' },
    { value: 314, label: 'Tandemaus' },
    { value: 315, label: 'Tatsugiri' },
    { value: 316, label: 'Tauros' },
    { value: 317, label: 'Teddiursa' },
    { value: 318, label: 'Tinkatink' },
    { value: 319, label: 'Tinkaton' },
    { value: 320, label: 'Tinkatuff' },
    { value: 321, label: 'Toedscool' },
    { value: 322, label: 'Toedscruel' },
    { value: 323, label: 'Torkoal' },
    { value: 324, label: 'Toxapex' },
    { value: 325, label: 'Toxel' },
    { value: 326, label: 'Toxicroak' },
    { value: 327, label: 'Toxtricity' },
    { value: 328, label: 'Tropius' },
    { value: 329, label: 'Tsareena' },
    { value: 330, label: 'Tynamo' },
    { value: 331, label: 'Tyranitar' },
    { value: 332, label: 'Umbreon' },
    { value: 333, label: 'Ursaring' },
    { value: 334, label: 'Vaporeon' },
    { value: 335, label: 'Varoom' },
    { value: 336, label: 'Veluza' },
    { value: 337, label: 'Venomoth' },
    { value: 338, label: 'Venonat' },
    { value: 339, label: 'Vespiquen' },
    { value: 340, label: 'Vigoroth' },
    { value: 341, label: 'Volcarona' },
    { value: 342, label: 'Voltorb' },
    { value: 343, label: 'Wattrel' },
    { value: 344, label: 'Weavile' },
    { value: 345, label: 'Whiscash' },
    { value: 346, label: 'Wigglytuff' },
    { value: 347, label: 'Wiglett' },
    { value: 348, label: 'Wingull' },
    { value: 349, label: 'Wooper' },
    { value: 350, label: 'Wugtrio' },
    { value: 351, label: 'Yungoos' },
    { value: 352, label: 'Zangoose' },
    { value: 353, label: 'Zoroark' },
    { value: 354, label: 'Zorua' },
    { value: 355, label: 'Zweilous' },
];