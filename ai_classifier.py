"""
AI-based Crime Classifier (Keyword-Based)
Classifies crime complaints into categories based on keywords in title/description.
"""

CRIME_CATEGORIES = {
    'theft': {
        'keywords': ['theft', 'steal', 'stolen', 'robbery', 'rob', 'burglary', 'burglar',
                      'pickpocket', 'shoplifting', 'loot', 'snatch', 'chori', 'chor'],
        'priority': 'High'
    },
    'assault': {
        'keywords': ['assault', 'attack', 'beat', 'hit', 'punch', 'stab', 'violence',
                      'fight', 'injury', 'wound', 'marpeet', 'hamla'],
        'priority': 'High'
    },
    'cybercrime': {
        'keywords': ['cyber', 'hacking', 'hack', 'phishing', 'online fraud', 'scam',
                      'identity theft', 'ransomware', 'malware', 'data breach', 'internet'],
        'priority': 'Medium'
    },
    'fraud': {
        'keywords': ['fraud', 'cheat', 'forgery', 'fake', 'counterfeit', 'embezzlement',
                      'corruption', 'bribe', 'money laundering', 'dhoka', 'thagee'],
        'priority': 'Medium'
    },
    'harassment': {
        'keywords': ['harass', 'harassment', 'stalking', 'stalk', 'threat', 'threaten',
                      'intimidation', 'bully', 'bullying', 'eve teasing', 'chedkhani'],
        'priority': 'High'
    },
    'domestic_violence': {
        'keywords': ['domestic', 'abuse', 'wife beating', 'dowry', 'marital', 'family violence',
                      'child abuse', 'domestic violence', 'gharelu hinsa'],
        'priority': 'High'
    },
    'murder': {
        'keywords': ['murder', 'kill', 'homicide', 'dead body', 'death', 'manslaughter', 'hatya'],
        'priority': 'Critical'
    },
    'kidnapping': {
        'keywords': ['kidnap', 'kidnapping', 'abduction', 'missing', 'hostage', 'ransom', 'agharan'],
        'priority': 'Critical'
    },
    'drug_crime': {
        'keywords': ['drug', 'narcotics', 'drugs', 'cocaine', 'heroin', 'marijuana', 'ganja',
                      'smuggling', 'substance', 'nasha'],
        'priority': 'High'
    },
    'sexual_offence': {
        'keywords': ['rape', 'sexual', 'molestation', 'indecent', 'exploitation',
                      'trafficking', 'prostitution'],
        'priority': 'Critical'
    },
    'vandalism': {
        'keywords': ['vandal', 'vandalism', 'property damage', 'graffiti', 'arson',
                      'destroy', 'destruction', 'riot', 'todphod'],
        'priority': 'Medium'
    },
    'traffic_violation': {
        'keywords': ['traffic', 'accident', 'rash driving', 'drunk driving', 'hit and run',
                      'signal jump', 'over speeding', 'durghatna'],
        'priority': 'Medium'
    }
}


def classify_crime(title, description=''):
    """
    Classify a crime based on keywords in title and description.
    Returns dict with category and priority.
    """
    text = (title + ' ' + description).lower()

    scores = {}
    for category, data in CRIME_CATEGORIES.items():
        score = 0
        for keyword in data['keywords']:
            if keyword in text:
                score += 1
        if score > 0:
            scores[category] = {
                'score': score,
                'priority': data['priority']
            }

    if not scores:
        return {
            'category': 'other',
            'priority': 'Low',
            'confidence': 0
        }

    # Get best match
    best_category = max(scores, key=lambda k: scores[k]['score'])
    best = scores[best_category]

    return {
        'category': best_category,
        'priority': best['priority'],
        'confidence': min(best['score'] / 3.0, 1.0)  # Normalize to 0-1
    }


def get_all_categories():
    """Return all possible crime categories."""
    return list(CRIME_CATEGORIES.keys()) + ['other']
