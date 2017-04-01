import json, sys
from watson_developer_cloud import ToneAnalyzerV3

tone_analyzer = ToneAnalyzerV3(
    username="0ee60e5b-cad8-433c-9d93-2981d6f69b29",
    password="RAZTAsc3A00N",
    version="2017-03-03")

input_text = sys.argv[1]

json_object = tone_analyzer.tone(text=input_text)
tones = json_object["document_tone"]["tone_categories"][0]["tones"]

new_tones = {}
for tone in tones:
    if (tone["tone_name"] == "Anger") :
        new_tones["anger"] = tone["score"]
    elif (tone["tone_name"] == "Disgust") :
          new_tones["disgust"] = tone["score"]
    elif (tone["tone_name"] == "Sadness") :
        new_tones["sadness"] = tone["score"]

print(new_tones)
