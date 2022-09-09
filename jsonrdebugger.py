from os import listdir
from os.path import isfile, join
import json

input_folder = "E:\\ARCHIVE\\FREELANCE\\NFT\\LogFiles\\test2"




i = 1

for file in listdir(input_folder):    
    file_url = "https://ipfs.io/ipfs/QmPiFNBP14X7f1y9nk6sY4KiDJmm8sTydWwTPfYcGyFhfw/"
    
    with open(input_folder + "//"+ file, "r") as jsonFile:
        data = json.load(jsonFile)
        
    atts = data["attributes"]
    #{"trait_type": "Head", "value": "Brown Round Fedora"}:
    bool1 = False
    bool2 = False
    
    for j in atts:
        if j == {"trait_type": "Eyewear", "value": "Linked"}:
            bool1 = True
        if j == {"trait_type": "Eyes", "value": "Bloodshot Blue "}:
            bool2 = True
            
    if (bool1):
        print(jsonFile.name)
    

    #if (data["Head"] == "Gray Oldschool" and data["Eyewear"] == "Monocle"):
    #    print(i)

    i += 1
        