jo bhi aise components hain jo exact same har page mai use hone wale hain jaise "navbar, footer" to ye hum layout.jsx ( main page ) mai rakhte hain. aur inko route folder mai components naam ke folder bana ke ussme rakhte hain.

aur home page ke liye bhi hum ek route folder banate hain app folder ke ander and same steps rehte hain, -- page.jsx -- , -- then home page ke components --. aur phir jo by default main page.jsx hai pure folder ka below the layout.jsx uss mai homePage ko import karte hain.

aur jo bhi routing pages hote hain ( about, contact, etc.) unhe hum app folder ke ander banate hain, aur wahi folder ka naam hum link tag mai dalte hain. 
  -- folder ka naam samll camelCase mai rakhte hain, eg:- about, contact, careerPage.
  -- aur inn folder ke ander ek page.jsx page hona jarruri hai kyoki wahi routing page ka main page    hai jo render hoga, ussi page.jsx mai uss route page ke components rakhte hain.
  -> hamare route folders ke name yaa kisi bhi file ke name ka starting ka word small rahega lekin jab hum usko export karenge waha uske first word ko Capital rakhenge, eg: 
                    const AboutHeroSection = () => {
                       return (
                            <>

                            </>
                       );
                    };

                    export default AboutHeroSection;