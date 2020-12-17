# testTechnique-Neopolis

* Pour lister tous les Albums:
Type de requête: GET
Endpoint: http://localhost:3000/albums
Resultat d'exécution: 
{
    "count": 2,
    "albums": [
        {
            "_id": "5fdaac1fc388b14348cd775a",
            "title": "General Admission",
            "totalSongs": 16,
            "request": {
                "type": "GET",
                "url": "http://localhost:3000/albums/5fdaac1fc388b14348cd775a"
            }
        },
        {
            "_id": "5fdaac62c388b14348cd775b",
            "title": "Hotel Diablo",
            "totalSongs": 14,
            "request": {
                "type": "GET",
                "url": "http://localhost:3000/albums/5fdaac62c388b14348cd775b"
            }
        }
    ]
}

*Pour lister toutes les Tracks: 
Type de requête: GET
Endpoint: http://localhost:3000/tracks
Resultat d'exécution:
{
    "count": 1,
    "tracks": [
        {
            "_id": "5fdb4da93b8379419854358a",
            "album": {
                "_id": "5fdaac1fc388b14348cd775a",
                "title": "General Admission",
                "year": 2015,
                "songsFormat": "MP3",
                "totalSongs": 16,
                "__v": 0
            },
            "title": "A Little More Ft Victoria Monet",
            "audio": "uploads\\audioFiles\\a-little-more-ft-victoria-monet-(Songsify.Com).mp3",
            "lyrics": "[Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Verse 1 - Machine Gun Kelly] I had a dream that the world changed And for a minute there was no pain Instead of presidents and old sayings I heard lyrics from Kurt Cobain Then I wake up to see the world's ill Oceans tainted from the oil spills How many kids have these wars killed? How many families can't afford bills? I wish that I could let the world know That it's okay to let the pain show And even though times seem bad It always rains before the rainbow  [Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Bridge - Victoria Monet + (Machine Gun Kelly)] (I think we all) We all need a little more love (I think we all) We all need a little more love (We just need) A little more love (The world needs) A little more love  [Verse 2 - Machine Gun Kelly] In my hood money equals power And in the world money controls everything we believe in I can see we're in our darkest hour Cause it feels like the government just as crooked as the police I spent the weekend catchin' up on the news A girl committed suicide after she was bullied at school Cause some dudes told her she wasn't cool But you would rather gossip about a famous person breaking the rules I'm confused, tell me is my life's price worth the jewels? They told me fight night I'm supposed to lose Just cause in hindsight, they don't like my type White boy with some rhythm and blues  [Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Bridge - Victoria Monet + (Machine Gun Kelly)] (I think we all) We all need a little more love (I think we all) We all need a little more love (We just need) A little more love (The world needs) A little more love  [Verse 3 - Machine Gun Kelly] You can give up like they tell you Stop like they tell you Be scared to dream for the top like they tell you But I'm tryna tell you, fuck what they tell you  [Outro:] (I think we, uh) And in these dark times, as a part of a generation they claim can't be saved, it's important to know we're not blind, we see the truth through blue and dark eyes, and I would rather die on my feet than live on my knees if I can't live free. Right now in the world we just need (a little more love).",
            "request": {
                "type": "GET",
                "url": "http://localhost:3000/tracks/5fdb4da93b8379419854358a"
            }
        }
    ]
}

*Pour lister les tracks relative à l'album d'id est "5fdaac1fc388b14348cd775a": 
Type de requête: GET
Endpoint: http://localhost:3000/albums/<id>
Resultat d'exécution pour "http://localhost:3000/albums/5fdaac1fc388b14348cd775a":  
{
    "count": 1,
    "tracks": [
        {
            "_id": "5fdb4da93b8379419854358a",
            "album": {
                "_id": "5fdaac1fc388b14348cd775a",
                "title": "General Admission",
                "year": 2015,
                "songsFormat": "MP3",
                "totalSongs": 16,
                "__v": 0
            },
            "title": "A Little More Ft Victoria Monet",
            "audio": "uploads\\audioFiles\\a-little-more-ft-victoria-monet-(Songsify.Com).mp3",
            "lyrics": "[Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Verse 1 - Machine Gun Kelly] I had a dream that the world changed And for a minute there was no pain Instead of presidents and old sayings I heard lyrics from Kurt Cobain Then I wake up to see the world's ill Oceans tainted from the oil spills How many kids have these wars killed? How many families can't afford bills? I wish that I could let the world know That it's okay to let the pain show And even though times seem bad It always rains before the rainbow  [Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Bridge - Victoria Monet + (Machine Gun Kelly)] (I think we all) We all need a little more love (I think we all) We all need a little more love (We just need) A little more love (The world needs) A little more love  [Verse 2 - Machine Gun Kelly] In my hood money equals power And in the world money controls everything we believe in I can see we're in our darkest hour Cause it feels like the government just as crooked as the police I spent the weekend catchin' up on the news A girl committed suicide after she was bullied at school Cause some dudes told her she wasn't cool But you would rather gossip about a famous person breaking the rules I'm confused, tell me is my life's price worth the jewels? They told me fight night I'm supposed to lose Just cause in hindsight, they don't like my type White boy with some rhythm and blues  [Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Bridge - Victoria Monet + (Machine Gun Kelly)] (I think we all) We all need a little more love (I think we all) We all need a little more love (We just need) A little more love (The world needs) A little more love  [Verse 3 - Machine Gun Kelly] You can give up like they tell you Stop like they tell you Be scared to dream for the top like they tell you But I'm tryna tell you, fuck what they tell you  [Outro:] (I think we, uh) And in these dark times, as a part of a generation they claim can't be saved, it's important to know we're not blind, we see the truth through blue and dark eyes, and I would rather die on my feet than live on my knees if I can't live free. Right now in the world we just need (a little more love).",
            "request": {
                "type": "GET",
                "url": "http://localhost:3000/tracks/5fdb4da93b8379419854358a"
            }
        }
    ]
}

* Pour lister rechercher un keywords s'il existe dans les lyrics des chansons:
Type de requête: GET
Endpoint: http://localhost:3000/tracks/lyrics/<keyword>
Resultat d'exécution pour "http://localhost:3000/tracks/lyrics/love":  
{
    "count": 1,
    "tracks": [
        {
            "_id": "5fdb4da93b8379419854358a",
            "album": {
                "_id": "5fdaac1fc388b14348cd775a",
                "title": "General Admission",
                "year": 2015,
                "songsFormat": "MP3",
                "totalSongs": 16,
                "__v": 0
            },
            "title": "A Little More Ft Victoria Monet",
            "audio": "uploads\\audioFiles\\a-little-more-ft-victoria-monet-(Songsify.Com).mp3",
            "lyrics": "[Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Verse 1 - Machine Gun Kelly] I had a dream that the world changed And for a minute there was no pain Instead of presidents and old sayings I heard lyrics from Kurt Cobain Then I wake up to see the world's ill Oceans tainted from the oil spills How many kids have these wars killed? How many families can't afford bills? I wish that I could let the world know That it's okay to let the pain show And even though times seem bad It always rains before the rainbow  [Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Bridge - Victoria Monet + (Machine Gun Kelly)] (I think we all) We all need a little more love (I think we all) We all need a little more love (We just need) A little more love (The world needs) A little more love  [Verse 2 - Machine Gun Kelly] In my hood money equals power And in the world money controls everything we believe in I can see we're in our darkest hour Cause it feels like the government just as crooked as the police I spent the weekend catchin' up on the news A girl committed suicide after she was bullied at school Cause some dudes told her she wasn't cool But you would rather gossip about a famous person breaking the rules I'm confused, tell me is my life's price worth the jewels? They told me fight night I'm supposed to lose Just cause in hindsight, they don't like my type White boy with some rhythm and blues  [Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Bridge - Victoria Monet + (Machine Gun Kelly)] (I think we all) We all need a little more love (I think we all) We all need a little more love (We just need) A little more love (The world needs) A little more love  [Verse 3 - Machine Gun Kelly] You can give up like they tell you Stop like they tell you Be scared to dream for the top like they tell you But I'm tryna tell you, fuck what they tell you  [Outro:] (I think we, uh) And in these dark times, as a part of a generation they claim can't be saved, it's important to know we're not blind, we see the truth through blue and dark eyes, and I would rather die on my feet than live on my knees if I can't live free. Right now in the world we just need (a little more love).",
            "request": {
                "type": "GET",
                "url": "http://localhost:3000/tracks/5fdb4da93b8379419854358a"
            }
        }
    ]
}

Resultat d'exécution pour "http://localhost:3000/tracks/lyrics/Sofiene":  
{
    "count": 0,
    "tracks": []
}

* Pour lister les détails relative à une chanson:
Type de requête: GET
Endpoint: http://localhost:3000/tracks/<id>
Resultat d'exécution pour "http://localhost:3000/tracks/5fdb4da93b8379419854358a":  
{
    "_id": "5fdb4da93b8379419854358a",
    "title": "A Little More Ft Victoria Monet",
    "audio": "uploads\\audioFiles\\a-little-more-ft-victoria-monet-(Songsify.Com).mp3",
    "lyrics": "[Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Verse 1 - Machine Gun Kelly] I had a dream that the world changed And for a minute there was no pain Instead of presidents and old sayings I heard lyrics from Kurt Cobain Then I wake up to see the world's ill Oceans tainted from the oil spills How many kids have these wars killed? How many families can't afford bills? I wish that I could let the world know That it's okay to let the pain show And even though times seem bad It always rains before the rainbow  [Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Bridge - Victoria Monet + (Machine Gun Kelly)] (I think we all) We all need a little more love (I think we all) We all need a little more love (We just need) A little more love (The world needs) A little more love  [Verse 2 - Machine Gun Kelly] In my hood money equals power And in the world money controls everything we believe in I can see we're in our darkest hour Cause it feels like the government just as crooked as the police I spent the weekend catchin' up on the news A girl committed suicide after she was bullied at school Cause some dudes told her she wasn't cool But you would rather gossip about a famous person breaking the rules I'm confused, tell me is my life's price worth the jewels? They told me fight night I'm supposed to lose Just cause in hindsight, they don't like my type White boy with some rhythm and blues  [Hook - Victoria Monet] I screamed at the top of my lungs But my voice couldn't save this home You're proud of the guns you hold What's left now? Where can we go?  [Bridge - Victoria Monet + (Machine Gun Kelly)] (I think we all) We all need a little more love (I think we all) We all need a little more love (We just need) A little more love (The world needs) A little more love  [Verse 3 - Machine Gun Kelly] You can give up like they tell you Stop like they tell you Be scared to dream for the top like they tell you But I'm tryna tell you, fuck what they tell you  [Outro:] (I think we, uh) And in these dark times, as a part of a generation they claim can't be saved, it's important to know we're not blind, we see the truth through blue and dark eyes, and I would rather die on my feet than live on my knees if I can't live free. Right now in the world we just need (a little more love).",
    "album": "5fdaac1fc388b14348cd775a"
}


* Pour créer un album:
Type de requête: POST
Endpoint: http://localhost:3000/albums
Les paramètres en form-data:
        title: <titre de l'album>,
        artist: <artist de l'album>,
        year: <année de sortie de l'album>,
        songsFormat: <format des chansons de l'album>,
        totalSongs: <Nombre total des chansons de l'album>
        
* Pour créer une chanson:
Type de requête: POST
Endpoint: http://localhost:3000/tracks
Les paramètres en form-data:
        title: <titre de la chansom>,
        trackAudio: <le fichier de la chanson>,
        lyrics: <les paroles de la chanson>,
        album: <l'ID de l'album>
