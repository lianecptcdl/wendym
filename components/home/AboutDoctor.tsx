import Section from '@/components/ui/Section';
import { Award, Droplets, Heart, Laugh } from 'lucide-react';

export default function AboutDoctor() {
  const values = [
    {
      icon: Heart,
      title: 'Patient au centre',
      description: 'Je suis à votre écoute et vous accompagne dans votre parcours de soin, pour vous proposer un plan de traitement personnalisé qui correspond réellement à vos besoins. '
    },
    {
      icon: Award,
      title: 'Modernité',
      description: 'Parce que la science évolue continuellement, nous investissons régulièrement dans de nouvelles technologies pour être toujours plus précis et pertinent dans notre quotidien. Cone beam, empreintes numériques, aides optiques, etc.'
    },
    {
      icon: Droplets,
      title: 'Asepsie rigoureuse',
      description: 'Chaine de stérilisation complète (décontamination, nettoyage, conditionnement et stérilisation). Nous respectons scrupuleusement les recommandations nationales et des mesures de précautions universelles (c’est-à-dire pour chaque acte et pour chaque patient) sont appliquées.'
    },
    {
      icon: Laugh,
      title: "Bien-être",
      description: "Pour ceux qui redoutent les soins dentaires, la technique de la sédation consciente par inhalation du gaz MEOPA, permet de bénéficier d’un état de pleine détente, aussi bien pour les adultes que les enfants. Les effets se dissipent totalement après quelques minutes, permettant ainsi de reprendre une activité normale ensuite."
    },
  ];

  return (
    <Section background="gray">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos valeurs
          </h2>
        </div>

      

        {/* Valeurs */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                <value.icon className="text-primary-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}