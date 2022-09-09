from os import listdir
from os.path import isfile, join
import json

input_folder = "E:\\ARCHIVE\\FREELANCE\\NFT\\LogFiles\\production"




for file in listdir(input_folder):    
    file_url = "https://ipfs.io/ipfs/QmPiFNBP14X7f1y9nk6sY4KiDJmm8sTydWwTPfYcGyFhfw/"
    print(file)
    with open(input_folder + "//"+ file, "r") as jsonFile:
        data = json.load(jsonFile)
        
    
        
    atts = data["attributes"]
    
    value_to_change1 = {"trait_type":"Head","value":"Green Oldschool"}
    value_to_change2 = {"trait_type":"Head","value":"Red Oldschool"}
    value_to_change3 = {"trait_type":"Head","value":"Gray Oldschool"}
    value_to_change4 = {"trait_type":"Cloth","value":"Jock Leather Jacket"}
    value_to_change5 = {"trait_type":"Cloth","value":"Jock's Canvas Jacket"}
    value_to_change6 = {"trait_type": "Mouth", "value": "Straw"}
    value_to_change7 = {"trait_type": "Head", "value": "Leather Cowboyhat"}
    value_to_change8 = {"trait_type": "Head", "value": "Snakeskin Cowboyhat"} #Brown-Basebell-Cap
    value_to_change9 = {"trait_type": "Head", "value": "Brown Basebell Cap"}
    value_to_change10 = {"trait_type": "Head", "value": "Blue Basebell Cap"}
    value_to_change11 ={"trait_type": "Hold", "value": "Assault"}
    value_to_change12 ={"trait_type": "Eyewear", "value": "Linked"}
    
    for j in atts:
        if j == value_to_change1:
            atts[atts.index(value_to_change1)] = {"trait_type":"Head","value":"Green Oldschool Cap"}
        elif j == value_to_change2:
            atts[atts.index(value_to_change2)] = {"trait_type":"Head","value":"Red Oldschool Cap"}
        elif j == value_to_change3:
            atts[atts.index(value_to_change3)] = {"trait_type":"Head","value":"Gray Oldschool Cap"}
        elif j == value_to_change4:
            atts[atts.index(value_to_change4)] = {"trait_type":"Cloth","value":"Leather Jacket"}
        elif j == value_to_change5:
            atts[atts.index(value_to_change5)] = {"trait_type":"Cloth","value":"Canvas Jacket"}
        elif j == value_to_change6:
            atts[atts.index(value_to_change6)] = {"trait_type": "Mouth", "value": "Sapling"}
        elif j == value_to_change7:
            atts[atts.index(value_to_change7)] = {"trait_type": "Head", "value": "Leather Cowboy Hat"}
        elif j == value_to_change8:
            atts[atts.index(value_to_change8)] = {"trait_type": "Head", "value": "Snakeskin Cowboy Hat"}
        elif j == value_to_change9:
            atts[atts.index(value_to_change9)] = {"trait_type": "Head", "value": "Brown Baseball Cap"}
        elif j == value_to_change10:
            atts[atts.index(value_to_change10)] = {"trait_type": "Head", "value": "Blue Baseball Cap"}
        elif j == value_to_change11:
            atts[atts.index(value_to_change11)] = {"trait_type": "Hold", "value": "Assault Rifle"}
        elif j == value_to_change12:
            atts[atts.index(value_to_change12)] = {"trait_type": "Eyewear", "value": "Monocle"}
            
            
            
            
            
            
    data["attributes"] = atts
            
    with open(input_folder + "//"+ file, "w") as jsonFile:
        json.dump(data, jsonFile)

    #if (data["Head"] == "Gray Oldschool" and data["Eyewear"] == "Monocle"):
    #    print(i)

