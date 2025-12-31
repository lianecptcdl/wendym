import Image from "next/image";

export default function Formation() {
    return (
        <div className="shrink-0">
            <div className="max-w-md">
                <figure className="mb-8">
                    <div className="w-80 h-80 mx-auto relative">
                        <Image
                            src="/images/drmezgueldiwendy.png"
                            alt="Dr Mezgueldi Wendy"
                            width={300}
                            height={300}
                            className="rounded-full shadow-lg object-cover"
                            priority
                        />
                    </div>
                    <figcaption className="sr-only">
                        Parcours universitaire et formations spécialisées
                    </figcaption>
                </figure>

                <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>
                        2013 - Université Claude Bernard Lyon 1 – Doctorat en chirurgie dentaire
                    </li>
                    <li>2021 - SFPIO Paris - Cursus Parodontologie & Implantologie</li>
                    <li>
                        2019 - Université de Strasbourg – DU Esthétique
                    </li>
                    <li>2018 - SAPO Clinique - Formation Parodontologie</li>
                    <li>2017 - SAPO Clinique - Formation Chirurgie & prothèse sur implant</li>
                    <li>
                        2016 - Université Jean Monnet Saint-Étienne – DU d&apos;anatomie appliquée à
                        l&apos;implantologie
                    </li>
                </ul>
            </div>
        </div>
    );
}