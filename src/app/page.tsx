import PresentationTextCard from "@/components/home/presentation-text-card";
import PrincipalHeader from "@/components/shared/navbars/principal-navbar"

export default function Home() {
  return (
    <>
      <PrincipalHeader/>
      <div>
        <div>
          <PresentationTextCard 
           title="Rick And Morty"
           text="Sinopsis. Rick Sánchez es un ejemplo del típico científico loco.
            Es irresponsable, alcohólico, un genio, egoísta, un poco depresivo, y 
            claramente está loco. Rick por diferentes razones termina mudándose a 
            la casa de su hija Beth y en ese momento se encuentra con su nieto, que 
            se llama Morty."
          />  
        </div>        
      </div>
    </>
  );
}
