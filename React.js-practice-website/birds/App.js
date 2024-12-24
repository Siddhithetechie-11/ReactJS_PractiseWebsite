import './App.css';
import Appbar from './Appbar';
import Imgtxt from './Imgtxt';
import React from "react";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from './components/Form';
import Table from './components/Table';
import Contact from './components/contact';
import Links from './components/Links';
import LabelBottomNavigation from './components/Navbot';


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
    paddingBottom: "40px"

  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Appbar />
      <Imgtxt />


      <div className="container mt-2" style={{ marginTop: 40 }}>
        {/* Render the page here */}
      </div>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            image="https://www.allaboutbirds.org/guide/assets/photo/303616521-480px.jpg"
            title="Mighty Eagle"
            content="Eagle is the common name for many large birds of prey of the family Accipitridae. 
            Eagles belong to several groups of genera, some of which are closely related. 
            Most of the 68species of eagle are from Eurasia and Africa.[1] Outside this area, 
            just 14 species can be found—2 in North America, 9 in Central and South America, and 3 in Australia."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            image="https://cdn.britannica.com/14/173414-050-434A2EE5/bird-hawk-Ferruginous-Hawk.jpg"
            title="Mighty Hawk"
            content="The terms accipitrine hawk and buteonine hawk are used to distinguish between the types 
            in regions where hawk applies to both. The term  is sometimes used for the accipitrine hawks in regions 
            where buzzard is preferred for the buteonine hawks."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            image="https://cdn.britannica.com/77/7677-050-9A597EFD/flamingo-Caribbean-plumage-skin-carotenoid-pigmentation-leg.jpg"
            title="Glamerous Flamingo"
            content="Flamingos or flamingoes[a] / are a type of wading bird in the family Phoenicopteridae, which is the only extant 
            family in the order Phoenicopteriformes. There are four flamingo species distributed throughout the Americas (including the Caribbean), 
            and two species native to Afro-Eurasia.A group of flamingoes is called a 'flamboyance.[2]'"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Peacock%2C_East_Park%2C_Hull_-_panoramio.jpg/1200px-Peacock%2C_East_Park%2C_Hull_-_panoramio.jpg"
            title="Graceful Peacock"
            content="Peafowl is a common name for three bird species in the genera Pavo and Afropavo within the tribe Pavonini of the family
             Phasianidae, the pheasants and their allies. Male peafowl are referred to as peacocks, and female peafowl are referred to as peahens, 
             even though peafowl of either sex are often referred to colloquially as ' peacocks'.[1]"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/1/1e/Ramphastos_toco_Whipsnade_Zoo.jpg"
            title="Toucans"
            content="Toucans (/ˈtuːkæn/, UK: /-kən/) are members of the Neotropical near passerine bird family Ramphastidae. The Ramphastidae are 
            most closely related to the American barbets. They are brightly marked and have large, often colorful bills. The family includes five 
            genera and over forty different species.Toucans are arboreal and typically lay 2–4 white eggs in their nests."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            image="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/146286731/1800"
            title="Kingfisher"
            content="Kingfishers or Alcedinidae are a family of small to medium-sized, brightly colored birds in the order Coraciiformes. 
            They have a cosmopolitan distribution, with most species found in the tropical regions of Africa, Asia, and Oceania but also can 
            be seen in Europe. They can be found in deep forests near calm ponds and small rivers. The family contains 114 species and is divided 
            into three subfamilies and 19 genera. All kingfishers have large heads, long, sharp, pointed bills, short legs, and stubby tails."
          />

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            image="https://wildlifesos.org/wp-content/uploads/2022/03/House-sparrow-female-scaled.jpg"
            title="sparrow"
            content="are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used 
            for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, 
            and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. "
          />

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/1/1f/Rose-ringed_parakeet_%28Psittacula_krameri_borealis%29_male_Jaipur_2.jpg"
            title="Talkative Parrot"
            content="Parrots, also known as psittacines (/ˈsɪtəsaɪnz/),[1][2] are birds of the roughly 398 species[3] in 92 genera comprising the 
            order Psittaciformes (/ˈsɪtəsɪfɔːrmiːz/), found mostly in tropical and subtropical regions. The order is subdivided into three 
            superfamilies: the Psittacoidea  the Cacatuoidea (cockatoos), and the Strigopoidea (New Zealand parrots)."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            image="https://i.natgeofe.com/n/9d00782c-b410-4e9c-aeb5-564fa290bb82/ostrich_thumb_3x4.JPG"
            title="The ostrich"
            content="Ostriches are large flightless birds of the genus Struthio in the order Struthioniformes, part of the infra-class Palaeognathae, 
            a diverse group of flightless birds also known as ratites that includes the emus, rheas, and kiwis. There are two living species of ostrich: 
            the common ostrich, native to large areas of sub-Saharan Africa and the Somali ostrich, native to the Horn of Africa."
          />
        </Grid>
      </Grid>

      <Form />

      <Contact />

      <Table />

      <Links />


      <LabelBottomNavigation />








    </div>
  );
}

export default App;
