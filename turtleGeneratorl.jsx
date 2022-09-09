var json2 = File($.fileName).path + "/" + "json2.js";
$.evalFile(json2);



var doc = app.activeDocument;
var saveFolder = "E:\\ARCHIVE\\FREELANCE\\NFT\\RenderOutputs\\Turtle\\"
var LogFolder = new Folder("E:\\ARCHIVE\\FREELANCE\\NFT\\LogFiles\\Turtle\\");

//#region ---------------------------- SETVARS ----------------------------
//HOLD TRAIT VARS
var hold_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("01_trait_hold");

var linked_rocket_string = "04_linked_rocketlauncher_x1";
var linked_rocket_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("04_linked_rocketlauncher");

var linked_rifle_string = "05_linked_rifle_x1";
var linked_rifle_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("05_linked_rifle");

var linked_jelly_string = "07_linked_jelly_x1";
var linked_jelly_string_pink = "00_Pink-Jelly_x1";
var linked_jelly_string_blue = "01_Blue-Jelly_x1";
var linked_jelly_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("07_linked_jelly");
var linked_jelly_group_pink = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("07_linked_jelly").layerSets.getByName("00_Pink-Jelly");
var linked_jelly_group_blue = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("07_linked_jelly").layerSets.getByName("01_Blue-Jelly");

var linked_snowboard_string = "09_linked_snowboard_x1";
var linked_snowboard_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("09_linked_snowboard");

var linked_biker_helmet_string = "11_linked_Biker-Helmet_x1";
var linked_biker_helmet_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("11_linked_biker_helmet");
var hold_empty_string = "06_empty_x15";

//HEAD TRAIT VARS
var head_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("03_trait_head");
var head_empty_string = "26_naked_x20";

var linked_monocle_string = "01_linked_Monocle_x1";
var linked_monocle_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("01_Monocle_x1");

var linked_scuba_string = "07_linked_scuba_googles_x1";
var linked_scuba_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("07_scuba-googles_x1");

var linked_bucket_string = "09_linked_bucket_x2";
var linked_bucket_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("09_linked_bucket");

var linked_fedora_string = "11_linked_fedora_x2";
var linked_fedora_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("11_linked_fedora");

var linked_snowboard_googles_string = "12_linked_snowboard_googles_x1";
var linked_snowboard_googles_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("12_linked_snowboard_googles");

var linked_sponge_string = "13_linked_sponge_x1";
var linked_sponge_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("13_linked_sponge");

var linked_cowboy_hat_string = "16_linked_cowboyhat_x2";
var linked_cowboy_hat_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("16_linked_cowboyhat");

var linked_king_crown_string = "17_linked_kingscrown_x1";
var linked_king_crown_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("17_linked_kingscrown");

var linked_turban_string = "19_linked_turban_x2";
var linked_turban_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("19_linked_turban");

var linked_cone_hat_string = "20_linked_cone_hat_x1";
var linked_cone_hat_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("20_linked_cone_hat");

var linked_beanie_string = "21_linked_beanie_x2";
var linked_beanie_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("21_linked_beanie");

var linked_beret_string = "22_linked_beret_x3";
var linked_beret_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("22_linked_beret");

var linked_backwards_cap_string = "23_linked_backwards_cap_x2";
var linked_backwards_cap_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("23_linked_backwards_cap");

var linked_thobe_string = "24_linked_Thobe_headdress_x1";
var linked_thobe_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("24_linked_Thobe_headdress");

var linked_bandana_string = "25_linked_bandana_x1";
var linked_bandana_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("25_linked_bandana");

var linked_sherlock_string = "25_linked_sherlock_hat_x1";
var linked_sherlock_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("25_linked_sherlock_hat");

//CLOTH TRAIT VARS
var cloth_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("04_trait_main_clothes");

var linked_scuba_cloth_string = "12_linked_scuba_x1";
var linked_scuba_cloth_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("12_linked_scuba");

var linked_barrel_string = "13_linked_barrel_x2";
var linked_barrel_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("13_linked_barrel");

var linked_scarf_string = "15_linked_scarf_x2";
var linked_scarf_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("15_linked_scarf");

var linked_kings_cape_string = "16_linked_kingscape_x3";
var linked_kings_cape_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("16_linked_kingscape");

var linked_red_headphone_string = "01_Red-Headphones_x1";
var linked_red_headphone_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("01_Red-Headphones_x1");

var linked_yellow_headphone_string = "02_Yellow-Headphones_x1";
var linked_yellow_headphone_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("02_Yellow-Headphones_x1");

//EXPRESSION TRAIT VARS
var expression_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("05_trait_base").layerSets.getByName("00_Expressions");
var body_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("05_trait_base").layerSets.getByName("00_Body");
var eyes_ref_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("05_trait_base").layerSets.getByName("00_Eyes").layerSets.getByName("00_Smiling").layerSets.getByName("main");
var eyes_alt_ref_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("05_trait_base").layerSets.getByName("00_Eyes").layerSets.getByName("00_Smiling").layerSets.getByName("alt");
var eyes_main_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("05_trait_base").layerSets.getByName("00_Eyes");
var mouth_main_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("02_trait_mouth").layerSets.getByName("00_Expression");
var mouth_ref_group = doc.layerSets.getByName("FIGURE").layerSets.getByName("02_trait_mouth").layerSets.getByName("00_Expression").layerSets.getByName("00_Smiling")
var bg_group = doc.layerSets.getByName("06_background").layerSets.getByName("main_bg")


var face_linked_furious = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_FACE_LINKED").layerSets.getByName("00_Expressions").layerSets.getByName("06_Furious");
var face_linked_crazy = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_FACE_LINKED").layerSets.getByName("00_Expressions").layerSets.getByName("03_Crazy");


//LINKED
var linked_wizard_1_string = "00_Brown-Blanket_x1";
var linked_wizard_2_string = "01_Purple-Blanket_x1";
var linked_wizard_3_string = "02_Green-Blanket_x1";

var linked_wizard_1_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("03_wizard_x4").layerSets.getByName("main").layerSets.getByName(linked_wizard_1_string);
var linked_wizard_2_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("03_wizard_x4").layerSets.getByName("main").layerSets.getByName(linked_wizard_2_string);
var linked_wizard_3_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("03_wizard_x4").layerSets.getByName("main").layerSets.getByName(linked_wizard_3_string);

var linked_bandana_1_string = "00_Purple-Bandana_x1";
var linked_bandana_2_string = "01_Blue-Bandana_x1";
var linked_bandana_3_string = "02_Red-Bandana_x1";

var linked_bandana_1_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("25_linked_bandana").layerSets.getByName("main_bandana").layerSets.getByName(linked_bandana_1_string);
var linked_bandana_2_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("25_linked_bandana").layerSets.getByName("main_bandana").layerSets.getByName(linked_bandana_2_string);
var linked_bandana_3_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("25_linked_bandana").layerSets.getByName("main_bandana").layerSets.getByName(linked_bandana_3_string);

var linked_backwards_cap_1_string = "00_Blue-and-Brown-Backwards-Cap_x1";
var linked_backwards_cap_2_string = "01_Green-and-Purple-Backwards-Cap_x1";
var linked_backwards_cap_3_string = "02_Brown-and-Blue-Backwards-Cap_x1";

var linked_backwards_cap_1_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("23_linked_backwards_cap").layerSets.getByName("main_cap").layerSets.getByName(linked_backwards_cap_1_string);
var linked_backwards_cap_2_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("23_linked_backwards_cap").layerSets.getByName("main_cap").layerSets.getByName(linked_backwards_cap_3_string);
var linked_backwards_cap_3_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("23_linked_backwards_cap").layerSets.getByName("main_cap").layerSets.getByName(linked_backwards_cap_3_string);

var linked_beret_1_string = "00_Red-Beret_x1";
var linked_beret_2_string = "01_Blue-Beret_x1";
var linked_beret_3_string = "02_Yellow-Beret_x1";
var linked_beret_4_string = "04_Gray-Beret_x1";

var linked_beret_1_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("22_linked_beret").layerSets.getByName("main_beret").layerSets.getByName(linked_beret_1_string);
var linked_beret_2_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("22_linked_beret").layerSets.getByName("main_beret").layerSets.getByName(linked_beret_2_string);
var linked_beret_3_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("22_linked_beret").layerSets.getByName("main_beret").layerSets.getByName(linked_beret_3_string);
var linked_beret_4_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("22_linked_beret").layerSets.getByName("main_beret").layerSets.getByName(linked_beret_4_string);

var linked_beanie_1_string = "00_Yellow-Beanie_x1";
var linked_beanie_2_string = "01_Red-Beanie_x1";

var linked_beanie_1_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("21_linked_beanie").layerSets.getByName("main_beanie").layerSets.getByName(linked_beanie_1_string);
var linked_beanie_2_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("21_linked_beanie").layerSets.getByName("main_beanie").layerSets.getByName(linked_beanie_2_string);

var linked_turban_1_string = "00_Brown-Turban_x1";
var linked_turban_2_string = "01_Blue-Turban_x1";

var linked_turban_1_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("19_linked_turban").layerSets.getByName("main_turban").layerSets.getByName(linked_turban_1_string);
var linked_turban_2_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("19_linked_turban").layerSets.getByName("main_turban").layerSets.getByName(linked_turban_2_string);

var linked_scarf_1_string = "00_Red-Green-Scarf_x1";
var linked_scarf_2_string = "01_Purple-Scarf_x1";

var linked_scarf_1_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("15_linked_scarf").layerSets.getByName("main_scarf").layerSets.getByName(linked_scarf_1_string);
var linked_scarf_2_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_TRAIT_LINKED").layerSets.getByName("15_linked_scarf").layerSets.getByName("main_scarf").layerSets.getByName(linked_scarf_2_string);

var linked_helmet_1_string = "02_helmet_soldier_x2";
var linked_helmet_1_layer = doc.layerSets.getByName("FIGURE").layerSets.getByName("XX_FACE_LINKED").layerSets.getByName("02_helmet_soldier");

var jpegSaveOptions = new JPEGSaveOptions();
jpegSaveOptions.quality = 12;

var bg_rand_chance_array = generateArray(bg_group)
var hold_rand_chance_array = generateArray(hold_group)
var head_rand_chance_array = generateArray(head_group)
var cloth_rand_chance_array = generateArray(cloth_group)
var body_rand_chance_array = generateArray(body_group)
var expression_rand_chance_array = generateArray(expression_group)
var eyes_rand_chance_array = generateArray(eyes_ref_group)
var eyes_alt_rand_chance_array = generateArray(eyes_alt_ref_group)
var mouth_rand_chance_array = generateArray(mouth_ref_group)

var bg_loop_number = bg_group.layers.length;
var cloth_loop_number = cloth_group.layers.length;
var hold_loop_number = hold_group.layers.length;
var head_loop_number = head_group.layers.length;
var body_loop_number = body_group.layers.length;
var expression_loop_number = expression_group.layers.length;
var eyes_loop_number = eyes_ref_group.layers.length;
var eyes_alt_loop_number = eyes_alt_ref_group.layers.length;
var mouth_loop_number = mouth_ref_group.layers.length;


//LOOPING LOGIC
for (var i = 0; i < 1500; i++) {
    var JSONfile = new File(LogFolder + "\\" + (i + 1) + ".json");
    JSONfile.open("w", " TEXT");
    JSONfile.close();
    var attributes = []

    var body_name;
    var exp_name;

    //BODY TRAIT
    var rand_body_int = generateRandomWithArray(body_rand_chance_array);

    for (var j = 0; j < body_loop_number; j++) {
        if (j == rand_body_int) {
            var mainLayer = body_group.layers[j];
            mainLayer.visible = true;

            body_name = mainLayer.name;
            var sliced_layer_name = processText(mainLayer.name);

            sliced_layer_name = sliced_layer_name.replace(' Skin', '');

            attributes.push({ "trait_type": "Skin", "value": sliced_layer_name });
            break;
        }
    }

    //EXPRESSION TRAIT
    var rand_exp_int = generateRandomWithArray(expression_rand_chance_array);

    for (var j = 0; j < expression_loop_number; j++) {
        if (j == rand_exp_int) {
            var mainLayer = expression_group.layers[j];
            mainLayer.visible = true;

            exp_name = mainLayer.name.slice(0, -3);
            var sliced_layer_name = processText(mainLayer.name);

            var body_exp_layer = mainLayer.layerSets.getByName(body_name);
            body_exp_layer.visible = true;

            attributes.push({ "trait_type": "Expression", "value": sliced_layer_name });

            if (sliced_layer_name == "Crazy")
            {
                face_linked_crazy.visible = true;
                face_linked_crazy.layerSets.getByName(body_name).visible = true;
            }
                
            else if (sliced_layer_name == "Furious")
            {
                face_linked_furious.visible = true;
                face_linked_furious.layerSets.getByName(body_name).visible = true;
            }
                

            break;
        }
    }

    //EYES TRAIT
    var rand_eyes_int = generateRandomWithArray(eyes_rand_chance_array);
    var eyes_exp_group = eyes_main_group.layerSets.getByName(exp_name);
    eyes_exp_group.visible = true;

    var eyecolor_layer = eyes_exp_group.layerSets.getByName("main");
    
    var eye_trait_string = "";

    for (var j = 0; j < eyes_loop_number; j++) {
        if (j == rand_eyes_int) {
            var mainLayer = eyecolor_layer.layers[j];
            mainLayer.visible = true;

            eye_trait_string = processText(mainLayer.name);
            eye_trait_string = eye_trait_string.replace('Eyes', '');
            break;
        }
    }

    //eyes alt
    var eye_alt_layer = eyes_exp_group.layerSets.getByName("alt"); //
    
    var rand_eyes_alt_int = generateRandomWithArray(eyes_alt_rand_chance_array);

    for (var j = 0; j < eyes_alt_loop_number; j++) {
        if (j == rand_eyes_alt_int) {
            var mainLayer = eye_alt_layer.layers[j];

            if (mainLayer.name.length < 8) {
                attributes.push({ "trait_type": "Eyes", "value": eye_trait_string });
                break;
            }

            mainLayer.visible = true;

            eye_trait_string = "Bloodshot " + eye_trait_string;
            attributes.push({ "trait_type": "Eyes", "value": eye_trait_string });
            break;
        }
    }

    //MOUTH TRAIT
    var rand_mouth_int = generateRandomWithArray(mouth_rand_chance_array);
    var mouth_loop_group = mouth_main_group.layerSets.getByName(exp_name);
    mouth_loop_group.visible = true;

    for (var j = 0; j < mouth_loop_number; j++) {

        if (j == rand_mouth_int) {
            var mainLayer = mouth_loop_group.layers[j];
            if (mainLayer.name.length < 8) { break; }

            mainLayer.visible = true;

            mouth_trait_string = processText(mainLayer.name);
            attributes.push({ "trait_type": "Mouth", "value": mouth_trait_string });
            break;
        }

    }

    //HOLD TRAIT
    var rand_hold_int = generateRandomWithArray(hold_rand_chance_array);

    for (var j = 0; j < hold_loop_number; j++) {
        if (j == rand_hold_int) {
            var mainLayer = hold_group.layers[j];
            mainLayer.visible = true;

            if (mainLayer.name == hold_empty_string)
                break;

            else if (mainLayer.name == linked_rocket_string) {
                linked_rocket_group.visible = true;
            }
            else if (mainLayer.name == linked_rifle_string) {
                linked_rifle_group.visible = true;
            }

            else if (mainLayer.name == linked_snowboard_string) {
                linked_snowboard_group.visible = true;
            }
            else if (mainLayer.name == linked_biker_helmet_string) {
                linked_biker_helmet_group.visible = true;
            }

            var sliced_layer_name = "";

            if (hold_group.layerSets[j].layers.length == 1) {
                var childLayer = hold_group.layerSets[j].layers[0];
                childLayer.visible = true;

                sliced_layer_name = processText(childLayer.name);
            }
            else {
                var rand_intermediate_array = generateArray(hold_group.layerSets[j]);
                var rand_intermediate_int = generateRandomWithArray(rand_intermediate_array);

                var loop_number = hold_group.layerSets[j].layers.length;
                for (var k = 0; k < loop_number; k++) {
                    if (k == rand_intermediate_int) {
                        var childLayer = hold_group.layerSets[j].layers[k];
                        childLayer.visible = true;

                        sliced_layer_name = processText(childLayer.name);

                        //LINKS
                        if (mainLayer.name == linked_jelly_string) {
                            linked_jelly_group.visible = true;

                            if (childLayer.name == linked_jelly_string_blue)
                                linked_jelly_group_blue.visible = true;
                            else if (childLayer.name == linked_jelly_string_pink)
                                linked_jelly_group_pink.visible = true;
                        }

                        break;
                    }
                }
            }

            attributes.push({ "trait_type": "Hold", "value": sliced_layer_name });
            break;
        }
    }

    //HEAD TRAIT
    var rand_hold_int = generateRandomWithArray(head_rand_chance_array);

    for (var j = 0; j < head_loop_number; j++) {
        if (j == rand_hold_int) {
            var mainLayer = head_group.layers[j];
            mainLayer.visible = true;

            var sliced_layer_name = "";

            if (mainLayer.name == linked_scuba_string) {
                linked_scuba_layer.visible = true;
            }
            else if (mainLayer.name == linked_bucket_string) {
                linked_bucket_layer.visible = true;
            }
            else if (mainLayer.name == linked_fedora_string) {
                linked_fedora_layer.visible = true;
            }
            else if (mainLayer.name == linked_snowboard_googles_string) {
                linked_snowboard_googles_layer.visible = true;
            }
            else if (mainLayer.name == linked_sponge_string) {
                linked_sponge_layer.visible = true;
            }
            else if (mainLayer.name == linked_cowboy_hat_string) {
                linked_cowboy_hat_layer.visible = true;
            }
            else if (mainLayer.name == linked_king_crown_string) {
                linked_king_crown_layer.visible = true;
            }
            else if (mainLayer.name == linked_turban_string) {
                linked_turban_layer.visible = true;
            }
            else if (mainLayer.name == linked_cone_hat_string) {
                linked_cone_hat_layer.visible = true;
            }
            else if (mainLayer.name == linked_beanie_string) {
                linked_beanie_layer.visible = true;
            }
            else if (mainLayer.name == linked_beret_string) {
                linked_beret_layer.visible = true;
            }
            else if (mainLayer.name == linked_backwards_cap_string) {
                linked_backwards_cap_layer.visible = true;
            }
            else if (mainLayer.name == linked_thobe_string) {
                linked_thobe_layer.visible = true;
            }
            else if (mainLayer.name == linked_bandana_string) {
                linked_bandana_layer.visible = true;
            }
            else if (mainLayer.name == linked_sherlock_string) {
                linked_sherlock_layer.visible = true;
            }
            else if (mainLayer.name == linked_helmet_1_string) {
                linked_helmet_1_layer.visible = true;
            }




            var main_group = head_group.layerSets[j].layerSets.getByName("main");
            try {
                var eyes_ref_group = head_group.layerSets[j].layerSets.getByName("eyex");
            }
            catch (error) {
                var eyes_ref_group = (function () { return; })();
            }


            //main group
            if (main_group.layers.length == 1) {
                var childLayer = main_group.layers[0];
                childLayer.visible = true;

                if (childLayer.name.length > 7) {
                    sliced_layer_name = processText(childLayer.name);
                    attributes.push({ "trait_type": "Head", "value": sliced_layer_name });
                }
            }
            else {
                var rand_intermediate_array = generateArray(main_group);
                var rand_intermediate_int = generateRandomWithArray(rand_intermediate_array);
                var loop_number = main_group.layers.length;
                for (var k = 0; k < loop_number; k++) {
                    if (k == rand_intermediate_int) {
                        var childLayer = main_group.layers[k];
                        childLayer.visible = true;
                        if (childLayer.name.length < 8) { break; }

                        sliced_layer_name = processText(childLayer.name);
                        attributes.push({ "trait_type": "Head", "value": sliced_layer_name });

                        //LINKS

                        if (childLayer.name == linked_bandana_1_string)
                        {
                            linked_bandana_1_layer.visible = true;
                        }
                        else if (childLayer.name == linked_bandana_2_string)
                        {
                            linked_bandana_2_layer.visible = true;
                        }
                        else if (childLayer.name == linked_bandana_3_string)
                        {
                            linked_bandana_3_layer.visible = true;
                        }
                        else if (childLayer.name == linked_backwards_cap_1_string)
                        {
                            linked_backwards_cap_1_layer.visible = true;
                        }
                        else if (childLayer.name == linked_backwards_cap_2_string)
                        {
                            linked_backwards_cap_2_layer.visible = true;
                        }
                        else if (childLayer.name == linked_backwards_cap_3_string)
                        {
                            linked_backwards_cap_3_layer.visible = true;
                        }
                        else if (childLayer.name == linked_beret_1_string)
                        {
                            linked_beret_1_layer.visible = true;
                        }
                        else if (childLayer.name == linked_beret_2_string)
                        {
                            linked_beret_2_layer.visible = true;
                        }
                        else if (childLayer.name == linked_beret_3_string)
                        {
                            linked_beret_3_layer.visible = true;
                        }
                        else if (childLayer.name == linked_beret_4_string)
                        {
                            linked_beret_4_layer.visible = true;
                        }
                        else if (childLayer.name == linked_beanie_1_string)
                        {
                            linked_beanie_1_layer.visible = true;
                        }
                        else if (childLayer.name == linked_beanie_2_string)
                        {
                            linked_beanie_2_layer.visible = true;
                        }
                        else if (childLayer.name == linked_turban_1_string)
                        {
                            linked_turban_1_layer.visible = true;
                        }
                        else if (childLayer.name == linked_turban_2_string)
                        {
                            linked_turban_2_layer.visible = true;
                        }
                        

                        break;
                    }
                }
            }

            //eye group
            if (typeof eyes_ref_group !== 'undefined') {
                if (eyes_ref_group.layers.length == 1) {
                    var childLayer = eyes_ref_group.layers[0];
                    childLayer.visible = true;

                    if (childLayer.name.length > 7) {
                        sliced_layer_name = processText(childLayer.name);

                        //links
                        if (childLayer.name == linked_monocle_string) {
                            linked_monocle_layer.visible = true;
                            sliced_layer_name = "Monocle";
                        }

                        else if (childLayer.name == "00_Sea-Googles_x1") {
                            var exp_group_sea_layer = childLayer.layerSets.getByName("Expressions").layerSets.getByName(exp_name);
                            exp_group_sea_layer.visible = true;
                        }
                        else if (childLayer.name == "04_Flaming-Glasses_x1") {
                            var exp_flaming_layer = childLayer.layerSets.getByName("00_Expressions").layerSets.getByName(exp_name);
                            exp_flaming_layer.visible = true;
                        }

                        attributes.push({ "trait_type": "Eyewear", "value": sliced_layer_name });
                    }
                }
                else {
                    var rand_intermediate_array = generateArray(eyes_ref_group);
                    var rand_intermediate_int = generateRandomWithArray(rand_intermediate_array);

                    var loop_number = eyes_ref_group.layers.length;
                    for (var k = 0; k < loop_number; k++) {
                        if (k == rand_intermediate_int) {
                            var childLayer = eyes_ref_group.layers[k];
                            childLayer.visible = true;

                            if (childLayer.name.length < 8) { break; }

                            sliced_layer_name = processText(childLayer.name);

                            //LINKS
                            if (childLayer.name == linked_monocle_string) {
                                linked_monocle_layer.visible = true;
                                sliced_layer_name = "Monocle";
                            }

                            attributes.push({ "trait_type": "Eyewear", "value": sliced_layer_name });
                            break;
                        }
                    }
                }
            }
            break;
        }
    }

    //CLOTH TRAIT
    var rand_hold_int = generateRandomWithArray(cloth_rand_chance_array);

    for (var j = 0; j < cloth_loop_number; j++) {
        if (j == rand_hold_int) {
            var mainLayer = cloth_group.layers[j];
            mainLayer.visible = true;

            var sliced_layer_name = "";

            if (mainLayer.name == linked_scuba_cloth_string) {
                linked_scuba_cloth_layer.visible = true;
            }
            else if (mainLayer.name == linked_barrel_string) {
                linked_barrel_layer.visible = true;
            }
            else if (mainLayer.name == linked_scarf_string) {
                linked_scarf_layer.visible = true;
            }
            else if (mainLayer.name == linked_kings_cape_string) {
                linked_kings_cape_layer.visible = true;
            }

            var main_group = cloth_group.layerSets[j].layerSets.getByName("main");
            try {
                var hphone_group = cloth_group.layerSets[j].layerSets.getByName("var");
            }
            catch (error) {
                var hphone_group = (function () { return; })();
            }

            try {
                var alt_group = cloth_group.layerSets[j].layerSets.getByName("alt");
            }
            catch (error) {
                var alt_group = (function () { return; })();
            }


            //main group
            if (main_group.layers.length == 1) {
                var childLayer = main_group.layers[0];
                childLayer.visible = true;

                

                if (childLayer.name.length > 7) {
                    sliced_layer_name = processText(childLayer.name);
                    attributes.push({ "trait_type": "Cloth", "value": sliced_layer_name });
                }
            }
            else {
                var rand_intermediate_array = generateArray(main_group);
                var rand_intermediate_int = generateRandomWithArray(rand_intermediate_array);
                var loop_number = main_group.layers.length;
                for (var k = 0; k < loop_number; k++) {
                    if (k == rand_intermediate_int) {
                        var childLayer = main_group.layers[k];
                        childLayer.visible = true;
                        if (childLayer.name.length < 8) { break; }

                        sliced_layer_name = processText(childLayer.name);
                        attributes.push({ "trait_type": "Cloth", "value": sliced_layer_name });
                        //LINKS

                        if (childLayer.name == linked_wizard_1_string)
                        {
                            linked_wizard_1_layer.visible = true;
                        }
                        else if (childLayer.name == linked_wizard_2_string)
                        {
                            linked_wizard_2_layer.visible = true;
                        }
                        else if (childLayer.name == linked_wizard_3_string)
                        {
                            linked_wizard_3_layer.visible = true;
                        }
                        else if (childLayer.name == linked_scarf_1_string)
                        {
                            linked_scarf_1_layer.visible = true;
                        }
                        else if (childLayer.name == linked_scarf_2_string)
                        {
                            linked_scarf_2_layer.visible = true;
                        }

                        break;
                    }
                }
            }

            //hphone group
            if (typeof hphone_group !== 'undefined') {
                if (hphone_group.layers.length == 1) {
                    var childLayer = hphone_group.layers[0];
                    childLayer.visible = true;

                    if (childLayer.name.length > 7) {
                        sliced_layer_name = processText(childLayer.name);

                        //links
                        if (childLayer.name == linked_red_headphone_string) {
                            linked_red_headphone_layer.visible = true;
                            sliced_layer_name = "Red Headphones";
                        }
                        else if (childLayer.name == linked_yellow_headphone_string) {
                            linked_yellow_headphone_layer.visible = true;
                            sliced_layer_name = "Yellow Headphones";
                        }

                        attributes.push({ "trait_type": "Headphones", "value": sliced_layer_name });
                    }
                }
                else {
                    var rand_intermediate_array = generateArray(hphone_group);
                    var rand_intermediate_int = generateRandomWithArray(rand_intermediate_array);

                    var loop_number = hphone_group.layers.length;
                    for (var k = 0; k < loop_number; k++) {
                        if (k == rand_intermediate_int) {
                            var childLayer = hphone_group.layers[k];
                            childLayer.visible = true;

                            if (childLayer.name.length < 8) { break; }

                            sliced_layer_name = processText(childLayer.name);

                            //LINKS
                            if (childLayer.name == linked_red_headphone_string) {
                                linked_red_headphone_layer.visible = true;
                                sliced_layer_name = "Red Headphones";
                            }
                            else if (childLayer.name == linked_yellow_headphone_string) {
                                linked_yellow_headphone_layer.visible = true;
                                sliced_layer_name = "Yellow Headphones";
                            }

                            attributes.push({ "trait_type": "Headphones", "value": sliced_layer_name });
                            break;
                        }
                    }
                }
            }

            //cloth alt group
            if (typeof alt_group !== 'undefined') {
                if (alt_group.layers.length == 1) {
                    var childLayer = alt_group.layers[0];
                    childLayer.visible = true;

                    if (childLayer.name.length > 7) {
                        sliced_layer_name = processText(childLayer.name);

                        attributes.push({ "trait_type": "Necklace", "value": sliced_layer_name });
                    }
                }
                else {
                    var rand_intermediate_array = generateArray(alt_group);
                    var rand_intermediate_int = generateRandomWithArray(rand_intermediate_array);

                    var loop_number = alt_group.layers.length;
                    for (var k = 0; k < loop_number; k++) {
                        if (k == rand_intermediate_int) {
                            var childLayer = alt_group.layers[k];
                            childLayer.visible = true;

                            if (childLayer.name.length < 8) { break; }

                            sliced_layer_name = processText(childLayer.name);

                            //LINKS

                            attributes.push({ "trait_type": "Necklace", "value": sliced_layer_name });
                            break;
                        }
                    }
                }
            }


            //BG TRAIT
            var rand_bg_int = generateRandomWithArray(bg_rand_chance_array);

            for (var j = 0; j < bg_loop_number; j++) {
                if (j == rand_bg_int) {
                    var mainLayer = bg_group.layers[j];
                    mainLayer.visible = true;

                    var sliced_layer_name = processText(mainLayer.name);
                    attributes.push({ "trait_type": "Background", "value": sliced_layer_name });
                    break;
                }
            }

            break;
        }
    }



    //FLATTEN IMAGE
    doc.flatten();
    //save file
    var jpgFile = File(saveFolder + "\\" + (i + 1) + ".jpg");
    doc.saveAs(jpgFile, jpegSaveOptions, true, Extension.LOWERCASE);

    var traits = {
        "description": "Turtlers, a 3D collection of 1500 crafted with passion and love, stored on the Ethereum blockchain",
        "image": "https://opensea-prod.appspot.com/puffs/3.png",
        "name": "Turtlerz #" + (i + 1),
        "attributes": attributes
    }

    //append to the log
    JSONfile.open("a");
    JSONfile.write(JSON.stringify(traits));
    JSONfile.close();

    //restore
    doc.activeHistoryState = doc.historyStates[0]
}
// var alertList = [];
// for (var j = 0; j < probs.length; j++) {

//     var a = probs[j] = (probs[j] / 32  / 100);
//     var b = hold_rand_chance_array[j]

//     alertList.push(["|",a.toFixed(2), b,"|"])
//    
//alert(alertList);}

function processText(str) {
    var sliced_layer_name = str.slice(3);
    sliced_layer_name = sliced_layer_name.split('_')[0];
    sliced_layer_name = sliced_layer_name.replace(/-/g, " ");

    return toTitleCase(sliced_layer_name);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function generateArray(layerList) {
    chance_array = [];

    var loop_number = layerList.layers.length;
    for (var j = 0; j < loop_number; j++) {
        var str = layerList.layers[j].name;

        if (!isNaN(parseInt(str.slice(-2)))) {
            var chanceString = layerList.layers[j].name.slice(-2);
            var chance = parseInt(chanceString);
            chance_array.push(chance);
        }
        else {
            var chanceString = layerList.layers[j].name.slice(-1);
            var chance = parseInt(chanceString);
            chance_array.push(chance);
        }
    }
    return chance_array;
}
var b = 0;

function generateRandomWithArray(intArray) {
    var sum = addItemsInArrayFlat(intArray);

    var rand_pct = generateRandom(sum);

    for (var i = 0; i < intArray.length; i++) {

        if (rand_pct <= addItemsInArray(intArray, 0))
            return i;

        if (i == intArray.length - 1)
            return i;

        else if (rand_pct > addItemsInArray(intArray, i - 1) && rand_pct <= addItemsInArray(intArray, i)) {
            return i;
        }
    }

    b += 1;
}

alert(b);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addItemsInArray(array, index) {
    var sum = 0;
    for (var i = 0; i < index + 1; i++) {
        sum += array[i]
    }
    return sum;
}

function addItemsInArrayFlat(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}

function generateRandom(range) {
    return Math.floor(Math.random() * range) + 1;
}
