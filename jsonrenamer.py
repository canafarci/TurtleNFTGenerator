from os import listdir
from os.path import isfile, join
import json

input_folder = "E:\\ARCHIVE\\FREELANCE\\NFT\\LogFiles\\production"





for file in listdir(input_folder):    
    file_url = "https://ipfs.io/ipfs/QmW9i4Z25JkU5D9UUr5pHjVzzaxxeutFqzNpnS2Jjvtfad/"
    
    with open(input_folder + "//"+ file, "r") as jsonFile:
        data = json.load(jsonFile)

    before, sep, after = file.rpartition(".")
    data["image"] = file_url + str(before) + ".jpg"

    with open(input_folder + "//"+ file, "w") as jsonFile:
        json.dump(data, jsonFile)
        