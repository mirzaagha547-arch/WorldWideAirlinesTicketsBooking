/* =========================
       FLIGHT SEARCH
    ========================= */

function searchFlights() {

    const from =
        document.getElementById("from").value.trim();

    const to =
        document.getElementById("to").value.trim();

    const departure =
        document.getElementById("departure").value;

    if (!from || !to || !departure) {

        alert(
            "Please enter your departure city, " +
            "destination and departure date."
        );

        return;
    }

    alert(
        "Flight search submitted!\n\n" +
        "From: " + from + "\n" +
        "To: " + to + "\n" +
        "Departure: " + departure
    );
}


/* =========================
       DESTINATION CONTENT
    ========================= */

const destinations = {

    dubai: {

        title: "🇦🇪 Dubai",

        content: `
            <h2>Dubai</h2>

            <p>
                Dubai is one of the world's most popular
                travel destinations, famous for its modern
                skyline, luxury hotels, shopping malls,
                beaches and desert experiences.
            </p>

            <h3>Top Attractions</h3>

            <p>
                Visitors can explore the Burj Khalifa,
                Dubai Mall, Palm Jumeirah, Dubai Marina
                and traditional markets.
            </p>

            <h3>Things To Do</h3>

            <p>
                Enjoy a desert safari, visit the beaches,
                explore modern architecture and experience
                Dubai's diverse food scene.
            </p>

            <h3>Best For</h3>

            <p>
                Families, couples, business travelers,
                shopping enthusiasts and adventure lovers.
            </p>
        `
    },


    london: {

        title: "🇬🇧 London",

        content: `
            <h2>London</h2>

            <p>
                London is a historic and multicultural city
                known for its famous landmarks, museums,
                parks and vibrant neighborhoods.
            </p>

            <h3>Top Attractions</h3>

            <p>
                Visit Big Ben, Buckingham Palace, the Tower
                of London, the London Eye and the British Museum.
            </p>

            <h3>Things To Do</h3>

            <p>
                Explore historic streets, enjoy traditional
                British food, visit museums and experience
                London's famous shopping districts.
            </p>

            <h3>Best For</h3>

            <p>
                History lovers, families, business travelers
                and culture enthusiasts.
            </p>
        `
    },


    paris: {

        title: "🇫🇷 Paris",

        content: `
            <h2>Paris</h2>

            <p>
                Paris is famous for its art, fashion,
                architecture, cuisine and romantic atmosphere.
            </p>

            <h3>Top Attractions</h3>

            <p>
                Explore the Eiffel Tower, Louvre Museum,
                Notre-Dame area, Champs-Élysées and Montmartre.
            </p>

            <h3>Things To Do</h3>

            <p>
                Visit museums, enjoy French cuisine, walk
                along the Seine and discover historic neighborhoods.
            </p>

            <h3>Best For</h3>

            <p>
                Couples, art lovers, food enthusiasts and
                travelers interested in history and culture.
            </p>
        `
    },


    newyork: {

        title: "🇺🇸 New York",

        content: `
            <h2>New York</h2>

            <p>
                New York City is a global center for business,
                entertainment, culture, shopping and food.
            </p>

            <h3>Top Attractions</h3>

            <p>
                See Times Square, Central Park, the Statue of
                Liberty, Empire State Building and Broadway.
            </p>

            <h3>Things To Do</h3>

            <p>
                Explore neighborhoods, visit museums, enjoy
                restaurants and experience the city's nightlife.
            </p>

            <h3>Best For</h3>

            <p>
                Families, business travelers, shoppers and
                entertainment lovers.
            </p>
        `
    },


    istanbul: {

        title: "🇹🇷 Istanbul",

        content: `
            <h2>Istanbul</h2>

            <p>
                Istanbul is a fascinating destination where
                European and Asian influences meet. The city
                combines history, culture, architecture and food.
            </p>

            <h3>Top Attractions</h3>

            <p>
                Visit Hagia Sophia, the Blue Mosque,
                Topkapi Palace and the Grand Bazaar.
            </p>

            <h3>Things To Do</h3>

            <p>
                Take a Bosphorus cruise, explore historic
                neighborhoods and enjoy Turkish cuisine.
            </p>

            <h3>Best For</h3>

            <p>
                History lovers, food travelers and cultural
                explorers.
            </p>
        `
    },


    maldives: {

        title: "🇲🇻 Maldives",

        content: `
            <h2>Maldives</h2>

            <p>
                The Maldives is famous for its beautiful
                islands, clear water, coral reefs and
                peaceful resorts.
            </p>

            <h3>Top Attractions</h3>

            <p>
                Explore private islands, beaches, coral reefs
                and underwater environments.
            </p>

            <h3>Things To Do</h3>

            <p>
                Enjoy snorkeling, diving, swimming, boat trips
                and relaxing at island resorts.
            </p>

            <h3>Best For</h3>

            <p>
                Couples, honeymooners, beach lovers and
                travelers looking for relaxation.
            </p>
        `
    },


    singapore: {

        title: "🇸🇬 Singapore",

        content: `
            <h2>Singapore</h2>

            <p>
                Singapore is a modern city-state known for
                clean streets, impressive architecture,
                gardens and diverse cuisine.
            </p>

            <h3>Top Attractions</h3>

            <p>
                Visit Marina Bay Sands, Gardens by the Bay,
                Sentosa Island and Chinatown.
            </p>

            <h3>Things To Do</h3>

            <p>
                Explore modern attractions, enjoy local food,
                visit gardens and discover cultural neighborhoods.
            </p>

            <h3>Best For</h3>

            <p>
                Families, business travelers, food lovers
                and modern-city explorers.
            </p>
        `
    },


    tokyo: {

        title: "🇯🇵 Tokyo",

        content: `
            <h2>Tokyo</h2>

            <p>
                Tokyo combines traditional Japanese culture
                with advanced technology, modern architecture
                and a vibrant food scene.
            </p>

            <h3>Top Attractions</h3>

            <p>
                Explore Shibuya, Tokyo Tower, Asakusa,
                Meiji Shrine and the city's famous shopping areas.
            </p>

            <h3>Things To Do</h3>

            <p>
                Try Japanese cuisine, visit temples, explore
                technology districts and experience Tokyo's
                unique neighborhoods.
            </p>

            <h3>Best For</h3>

            <p>
                Food lovers, technology enthusiasts, families
                and culture travelers.
            </p>
        `
    },


    kualalumpur: {

        title: "🇲🇾 Kuala Lumpur",

        content: `
            <h2>Kuala Lumpur</h2>

            <p>
                Kuala Lumpur is a vibrant Malaysian city
                known for its modern skyline, multicultural
                neighborhoods and excellent food.
            </p>

            <h3>Top Attractions</h3>

            <p>
                Visit the Petronas Twin Towers, Batu Caves,
                Bukit Bintang and the city's major markets.
            </p>

            <h3>Things To Do</h3>

            <p>
                Explore local cuisine, shop in modern malls,
                visit cultural attractions and discover the
                city's diverse neighborhoods.
            </p>

            <h3>Best For</h3>

            <p>
                Families, shoppers, food lovers and travelers
                interested in Southeast Asian culture.
            </p>
        `
    }

};


/* =========================
       OPEN DESTINATION
    ========================= */

function showDestination(city) {

    const modal =
        document.getElementById(
            "destinationModal"
        );

    const destinationText =
        document.getElementById(
            "destinationText"
        );

    const destination =
        destinations[city];

    if (!destination) {
        return;
    }

    destinationText.innerHTML =
        destination.content;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================
       CLOSE DESTINATION
    ========================= */

function closeDestination() {

    const modal =
        document.getElementById(
            "destinationModal"
        );

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


/* =========================
       CLOSE MODAL WHEN CLICKING
       OUTSIDE THE BOX
    ========================= */

document
    .getElementById("destinationModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeDestination();

            }

        }
    );


/* =========================
       CONTACT FORM
    ========================= */

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting WorldWideAirlinesTicketsBooking! " +
        "Your message has been received."
    );

    event.target.reset();
}


function toggleMenu() {
            document.getElementById("nav").classList.toggle("active");
        }


        function showNotification(message) {

            const notification =
                document.getElementById("notification");

            notification.textContent = message;
            notification.style.display = "block";

            setTimeout(function () {
                notification.style.display = "none";
            }, 3500);
        }


        function searchFlights() {

            const inputs = document.querySelectorAll(
                '.search-grid input[type="text"]'
            );

            const from = inputs[0].value.trim();
            const to = inputs[1].value.trim();

            if (!from || !to) {
                showNotification(
                    "Please enter your departure and arrival cities."
                );
                return;
            }

            showNotification(
                "Flight search submitted! Connect this form to your flight API/backend to display real results."
            );
        }


        function sendMessage(event) {

            event.preventDefault();

            showNotification(
                "Thank you! Your message has been submitted."
            );

            event.target.reset();
        }


        // Automatically set minimum departure date to today

        const today = new Date().toISOString().split("T")[0];

        const dateInputs = document.querySelectorAll(
            'input[type="date"]'
        );

        dateInputs.forEach(function(input) {
            input.min = today;
        });


        // Close mobile menu after clicking a navigation link

        document.querySelectorAll("nav a").forEach(function(link) {

            link.addEventListener("click", function() {
                document.getElementById("nav").classList.remove("active");
            });

        });

