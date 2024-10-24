import AlternatingCards from "@/components/home/alternatives-cards";
import PresentationTextCard from "@/components/home/presentation-text-card";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-6 flex justify-center mt-20">
          <PresentationTextCard 
           title="Rick And Morty"
           text="Sinopsis. Rick Sánchez es un ejemplo del típico científico loco.
            Es irresponsable, alcohólico, un genio, egoísta, un poco depresivo, y 
            claramente está loco. Rick por diferentes razones termina mudándose a 
            la casa de su hija Beth y en ese momento se encuentra con su nieto, que 
            se llama Morty."
          />  
        </div>       
        <div className="col-span-6">
          <AlternatingCards/>
        </div> 
      </div>
    </>
  );
}
