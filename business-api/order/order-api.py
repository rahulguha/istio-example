#!/usr/local/bin/python3
import flask
from flask import request, jsonify
app = flask.Flask(__name__)
app.config["DEBUG"] = True
# Create some test data for our catalog in the form of a list of dictionaries.
order = [
    {'id': 1234,
     'products': 
     [
         {
             'id': 1,
             'final-price': 185,
             'tax': 9.25,
             'address1': '250 Creekside Lane',
             'address2': '',
             'address3': '',
             'city': 'Copell',
             'state': 'TX',
             'zip': '75019',
             'phone1': '4691239870',
             'phone2': '2133454567'
         },
         {
             'id': 2,
             'final-price': 100,
             'tax': 5,
             'address1': '250 Creekside Lane',
             'address2': '',
             'address3': '',
             'city': 'Copell',
             'state': 'TX',
             'zip': '75019',
             'phone1': '4691239870',
             'phone2': '2133454567'
         }

     ]
    }
]


@app.route('/', methods=['GET'])
#def home():
#    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

# A route to return all of the available entries in our catalog.
@app.route('/', methods=['GET'])
def api_id():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify an id."

    # Create an empty list for our results
    # results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    #for book in books:
    #    if book['id'] == id:
    #        results.append(book)

    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return jsonify(order)

if __name__ == '__main__':
    app.run(debug=True, host ="0.0.0.0", port=5000)