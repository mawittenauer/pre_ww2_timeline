const map = L.map('map').setView([48.8566, 2.3522], 5); // Centered on Europe

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxzoom: 19,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

const locations = [
  {
    "title": "Treaty of Versailles Signed",
    "date": "June 28, 1919",
    "coordinates": [48.8049, 2.1204],
    "description": "On June 28, 1919, the Treaty of Versailles was signed at the Palace of Versailles, officially ending World War I. The treaty imposed strict reparations and territorial losses on Germany and laid the groundwork for geopolitical tensions that would later lead to World War II."
  },
  {
    "title": "Mussolini Takes Power in Italy",
    "date": "October 31, 1922",
    "coordinates": [41.9028, 12.4964],
    "description": "On October 31, 1922, Benito Mussolini became Prime Minister of Italy after the March on Rome. This marked the beginning of Fascist rule in Italy and Mussolini's rise as a totalitarian dictator."
  },
  {
    "title": "Occupation of the Ruhr",
    "date": "January 11, 1923",
    "coordinates": [51.4717, 7.2205],
    "description": "On January 11, 1923, French and Belgian troops occupied Germany's Ruhr Valley after Germany failed to make reparations payments required by the Treaty of Versailles. The occupation escalated tensions in postwar Europe and crippled the German economy, contributing to hyperinflation and unrest."
  },
  {
    "title": "Beer Hall Putsch",
    "date": "November 8, 1923",
    "coordinates": [48.1351, 11.582],
    "description": "On November 8–9, 1923, Adolf Hitler and the Nazi Party attempted to overthrow the Weimar government in what became known as the Beer Hall Putsch. The coup failed, and Hitler was arrested and sentenced to prison, during which he wrote *Mein Kampf*."
  },
  {
    "title": "Hitler Appointed Chancellor of Germany",
    "date": "January 30, 1933",
    "coordinates": [52.5200, 13.4050],
    "description": "On January 30, 1933, Adolf Hitler was appointed Chancellor of Germany by President Paul von Hindenburg. This marked a critical turning point that enabled Hitler to dismantle democratic institutions and establish a totalitarian Nazi regime."
  },
  {
    "title": "Reichstag Fire",
    "date": "February 27, 1933",
    "coordinates": [52.5186, 13.3762],
    "description": "On February 27, 1933, the German parliament building (Reichstag) was set on fire in Berlin. The Nazis blamed the communists and used the incident to justify the Reichstag Fire Decree, which suspended civil liberties and allowed mass arrests, helping Hitler consolidate power."
  },
  {
    "title": "Night of the Long Knives",
    "date": "June 30, 1934",
    "coordinates": [52.5200, 13.4050],
    "description": "From June 30 to July 2, 1934, Adolf Hitler carried out a series of political purges known as the Night of the Long Knives. The Nazi regime arrested and executed members of the SA (Sturmabteilung) and other political opponents to consolidate Hitler's absolute power in Germany."
  },
  {
    "title": "Death of Paul von Hindenburg",
    "date": "August 2, 1934",
    "coordinates": [53.5900, 20.3400],
    "description": "On August 2, 1934, President Paul von Hindenburg died at the age of 86. His death allowed Adolf Hitler to merge the offices of Chancellor and President, declaring himself Führer of Germany and securing total control of the state."
  },
  {
    "title": "Germany Remilitarizes the Rhineland",
    "date": "March 7, 1936",
    "coordinates": [50.9407, 6.9599],
    "description": "On March 7, 1936, Adolf Hitler defied the Treaty of Versailles and the Locarno Pact by sending German troops into the demilitarized Rhineland. This move was met with little resistance from France or Britain. A month later, a national referendum overwhelmingly approved Hitler's actions, further consolidating his control and emboldening Nazi foreign policy."
  },
  {
    "title": "Occupation of the Sudetenland",
    "date": "October 1, 1938",
    "coordinates": [50.0780, 12.4446],
    "description": "On October 1, 1938, German troops entered the Sudetenland, a region of Czechoslovakia with a large ethnic German population. Though allowed by the Munich Agreement, Hitler later broke the pact and took over the rest of Czechoslovakia in March 1939, escalating tensions in Europe."
  },
  {
    "title": "Kristallnacht (Night of Broken Glass)",
    "date": "November 9, 1938",
    "coordinates": [52.5200, 13.4050],
    "description": "On the night of November 9–10, 1938, Nazi forces and civilians attacked Jewish communities across Germany and Austria. Synagogues were set on fire, Jewish-owned shops were destroyed, and tens of thousands of Jewish men were arrested and sent to concentration camps. It was a turning point in the Nazi persecution of Jews."
  }
];

const locationList = document.getElementById('location-list');

locations.forEach(location => {
    // Create marker
    const marker = L.marker(location.coordinates)
        .addTo(map)
        .bindPopup(`<b>${location.title}</b><br>${location.date}`);

    // Create sidebar entry
    const locationElement = document.createElement('div');
    locationElement.className = 'location-details';
    locationElement.setAttribute('data-coordinates', location.coordinates.join(','));
    locationElement.innerHTML = `
        <div class="location-title">${location.title}</div>
        <div class="location-date">${location.date}</div>
        <div class="location-description">${location.description}</div>
    `;

    // Function to handle highlighting active location
    const setActiveLocation = (element) => {
        // Remove active class from all locations
        document.querySelectorAll('.location-details').forEach(el => {
            el.classList.remove('active');
        });
        // Add active class to clicked location
        element.classList.add('active');
    };

    // Add click handler to sidebar entry
    locationElement.addEventListener('click', () => {
        map.setView(location.coordinates, 6);
        marker.openPopup();
        setActiveLocation(locationElement);
    });

    // Add click handler to marker
    marker.on('click', () => {
        setActiveLocation(locationElement);
        locationElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    locationList.appendChild(locationElement);
});
