let url = "https://pokeapi.co/api/v2/pokemon/";
let req = new XMLHttpRequest();

let type1;
let type2;
let color1;
let color2;
let stats_arr;

let data;
let poke_img;
let getPokeData = () => {
    let getName = document.getElementById("enter-name").value.toLowerCase();
    document.getElementById("name").innerHTML = getName.toUpperCase();
    req.open('GET', url + getName, true);
    req.onload = () => {
        data = JSON.parse(req.responseText);
        console.log(data);
        poke_img = data.sprites.front_default;
        document.getElementById("myImg").src = poke_img;
        document.getElementById("myImg").style.visibility = "visible";

        //setting color based on type array
        let arr_type = data.types;
        if(arr_type.length == 1) {
            type1 = arr_type[0].type.name;
            switch(type1) {
                case("normal"):
                    color1 = "grey";
                    break;
                case("fire"):
                    color1 = "red";
                    break;
                case "water":
                    color1 = "blue";
                    break;
                case("grass"):
                    color1 = "green";
                    break;
                case("electric"):
                    color1 = "yellow";
                    break;
                case("ice"):
                    color1 = "aquamarine";
                    break;
                case("ground"):
                    color1 = "brown";
                    break;
                case("flying"):
                    color1 = "#6495ED";
                    break;
                case("poison"):
                    color1 = "#DDA0DD";
                    break;
                case("fighting"):
                    color1 = "#8B0000";
                    break;
                case("psychic"):
                    color1 = "#FF1493";
                    break;
                case("dark"):
                    color1 = "#800000";
                    break;
                case("rock"):
                    color1 = "#F0E68C";
                    break;
                case("bug"):
                    color1 = "#ADFF2F";
                    break;
                case("ghost"):
                    color1 = "#BA55D3";
                    break;
                case("steel"):
                    color1 = "#E6E6FA";
                    break;
                case("dragon"):
                    color1 = "#0000CD";
                    break;
                case("fairy"):
                    color1 = "#EE82EE";
                    break;
            }
            document.getElementById("card").style.background = color1;
            document.getElementById("type1").innerHTML = type1;
            document.getElementById('type2').innerHTML = "";
        }
        else {
            type1 = arr_type[0].type.name;
            type2 = arr_type[1].type.name;
            switch(type1) {
                case "normal":
                    color1 = "grey";
                    break;
                case "fire":
                    color1 = "red";
                    break;
                case "water":
                    color1 = "blue";
                    break;
                case "grass":
                    color1 = "green";
                    break;
                case "electric":
                    color1 = "yellow";
                    break;
                case("ice"):
                    color1 = "aquamarine";
                    break;
                case("ground"):
                    color1 = "brown";
                    break;
                case("flying"):
                    color1 = "#6495ED";
                    break;
                case("poison"):
                    color1 = "#DDA0DD";
                    break;
                case("fighting"):
                    color1 = "#8B0000";
                    break;
                case("psychic"):
                    color1 = "#FF1493";
                    break;
                case("dark"):
                    color1 = "#800000";
                    break;
                case("rock"):
                    color1 = "#F0E68C";
                    break;
                case("bug"):
                    color1 = "#ADFF2F";
                    break;
                case("ghost"):
                    color1 = "#BA55D3";
                    break;
                case("steel"):
                    color1 = "#E6E6FA";
                    break;
                case("dragon"):
                    color1 = "#0000CD";
                    break;
                case("fairy"):
                    color1 = "#EE82EE";
                    break;
            }

            switch(type2) {
                case("normal"):
                    color2 = "grey";
                    break;
                case("fire"):
                    color2 = "red";
                    break;
                case("water"):
                    color2 = "blue";
                    break;
                case("grass"):
                    color2 = "green";
                    break;
                case("electric"):
                    color2 = "yellow";
                    break;
                case("ice"):
                    color2 = "aquamarine";
                    break;
                case("ground"):
                    color2 = "brown";
                    break;
                case("flying"):
                    color2 = "#6495ED";
                    break;
                case("poison"):
                    color2 = "#DDA0DD";
                    break;
                case("fighting"):
                    color2 = "#8B0000";
                    break;
                case("psychic"):
                    color2 = "#FF1493";
                    break;
                case("dark"):
                    color2 = "#800000";
                    break;
                case("rock"):
                    color2 = "#F0E68C";
                    break;
                case("bug"):
                    color2 = "#ADFF2F";
                    break;
                case("ghost"):
                    color2 = "#BA55D3";
                    break;
                case("steel"):
                    color2 = "#E6E6FA";
                    break;
                case("dragon"):
                    color2 = "#0000CD";
                    break;
                case("fairy"):
                    color2 = "#EE82EE";
                    break;
            }
            document.getElementById("card").style.background = 'linear-gradient('+ color1 + "," + color2 + ')';
            document.getElementById('type1').innerHTML = type1;
            document.getElementById('type2').innerHTML = type2;
        }
        //get stats
        stats_arr = data.stats;
        document.getElementById('hp').style.width = stats_arr[0].base_stat * 2 + "px";
        document.getElementById('attack').style.width = stats_arr[1].base_stat * 2 + "px";
        document.getElementById('defense').style.width = stats_arr[2].base_stat * 2 + "px";
    }
    req.send();
}



