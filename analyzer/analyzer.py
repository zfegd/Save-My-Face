import json
import os
from flask import Flask, request
from watson_developer_cloud import ToneAnalyzerV3

tone_analyzer = ToneAnalyzerV3(
    username="0ee60e5b-cad8-433c-9d93-2981d6f69b29",
    password="RAZTAsc3A00N",
    version="2017-03-03")

app = Flask(__name__)

def get_message(largest):
    if (largest < 0.4):
        return "No problem"
    elif (largest < 0.5):
        return "Mild"
    else:
        return "Strong"

def get_scores(tones) :
    new_tones = {}
    for tone in tones:
        if (tone["tone_name"] == "Anger"):
            new_tones["anger"] = tone["score"]
        elif (tone["tone_name"] == "Disgust"):
            new_tones["disgust"] = tone["score"]
        elif (tone["tone_name"] == "Sadness"):
            new_tones["sadness"] = tone["score"]
    return new_tones

@app.route('/', methods=["GET", "POST"])
def post_info():
    input_text = request.form.get("payload")
    json_object = tone_analyzer.tone(text=input_text)
    tones = json_object["document_tone"]["tone_categories"][0]["tones"]
    scores = get_scores(tones)
    return get_message(max(scores.values()))

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
