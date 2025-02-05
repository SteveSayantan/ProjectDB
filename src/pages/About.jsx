const About = () => {
    return (
        <div className="bg-white">
            <section class="bg-blue-600 text-white py-20 lg:py-24">
                <div class="max-w-7xl mx-auto text-center">
                    <h2 class="text-4xl font-bold mb-4 lg:text-5xl">
                        About Us
                    </h2>
                    <p class="text-lg mb-8 lg:text-xl">
                        Discover how SPKP empowers students and educators by
                        fostering innovation and collaboration.
                    </p>
                </div>
            </section>

            <section class="py-16 max-w-7xl mx-auto px-4 text-gray-800 lg:py-20">
                <div class="text-center mb-12 md:mb-16">
                    <h3 class="text-2xl lg:text-3xl font-semibold mb-4">
                        Our Mission
                    </h3>
                    <p class="lg:text-lg">
                        Our mission is to create a knowledge-sharing platform
                        that showcases student projects, facilitates peer
                        learning, and fosters innovation across Indian
                        universities and colleges. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Dignissimos similique
                        deleniti illo explicabo ipsum. Ipsa aspernatur earum
                        quaerat culpa repudiandae!
                    </p>
                </div>

                <div class="md:flex md:justify-between">
                    <div class="md:w-5/12">
                        <h4 class="text-xl lg:text-2xl font-semibold text-blue-600 mb-2">
                            Why SPKP?
                        </h4>
                        <p class="text-justify lg:text-lg">
                            SPKP bridges the gap between institutions by
                            providing a unified space for students to showcase
                            their projects. This encourages collaboration and
                            inspires unique and innovative ideas across
                            disciplines. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Maiores magni, autem laborum
                            beatae eveniet excepturi?
                        </p>
                    </div>
                    <div class="mt-8 md:mt-0 md:w-5/12">
                        <h4 class="text-xl font-semibold text-blue-600 mb-2 lg:text-2xl">
                            What We Offer
                        </h4>
                        <ul class="list-disc list-inside lg:text-lg">
                            <li>A curated database of student projects</li>
                            <li>
                                Category-wise exploration for ease of access
                            </li>
                            <li>
                                Insights into cutting-edge research and
                                developments
                            </li>
                            <li>
                                Opportunities for cross-functional collaboration
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
