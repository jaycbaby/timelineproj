Data visualization- TimelineJS library
==========
Using TimelineJS library to create a dynamically-generated visual timeline of the NSA headlines featured on The Guardian. 

Key features:
- Embedded article headlines, thumbnails, and preview text
- pulling in the most relevant news stories from The Guardian API based on user-defined date range 
- scrolling, keyboard, or mouse-click navigation 

Key challenges: 
- curating articles and what consistutes "relevant"  
    [ACCOMPLISHED: changed API call to generate most relevant articles based on relevancy instead of of chronological. made keywords more specific (NSA, snowden, survelliance)]

- embedding multimedia. no access to video or audio assets. picture are low-resolution
    pTODO: need to apply for a higher level API key from the Guardian to get access to HQ assets]

Moving forward:
- allowing users to generate timeline and filtering by country keyword (NSA's involvement with Russia, UK, etc)
