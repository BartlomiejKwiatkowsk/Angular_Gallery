import { Component } from '@angular/core';
import { interfejs } from './interfejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  title = 'ProjektAngular';
  options: interfejs[] = [
    {Number : 1 ,Text : '1.Guppy', Image : 'assets/Zdj/gupik1.jpg',Image1 : 'assets/Zdj/gupik2.jpg',Image2 : 'assets/Zdj/gupik3.jpg',Description: "Guppies prefer moderately hard to hard water, but they do not tolerate soft water well. - A pregnant female can be recognized by a dark spot behind her anal fin, located just under her belly. The pregnancy of the female lasts on average from 4 to 6 weeks, resulting in 5 to 100 fry."},
    {Number : 2 , Text : '2.Rainbow fish', Image : 'assets/Zdj/teczanka1.jpg',Image1 : 'assets/Zdj/teczanka2.jpg',Image2 : 'assets/Zdj/teczanka3.jpg',Description: "This species thrives in densely planted areas with dark substrate and minimal lighting. Open space is also significant for neon rainbow fish, so if you decide to keep several individuals, you should have an aquarium with a capacity of up to 100 liters."},
    {Number : 3 ,Text : '3.Pleco', Image : 'assets/Zdj/glonojad1.jpg',Image1 : 'assets/Zdj/glonojad2.jpg',Image2 : 'assets/Zdj/glonojad3.jpg',Description: "Behavior of plecos: These fish are particularly active at night. During the day, they usually hide in various shelters, which should be plentiful in the aquarium. They prefer to spend time on the aquarium glass or its bottom. Common plecos are easily adaptable and non-aggressive."},
    {Number : 4 ,Text : '4.Carp', Image : 'assets/Zdj/karp1.jpg',Image1 : 'assets/Zdj/karp2.jpg',Image2 : 'assets/Zdj/karp3.jpg',Description: "Carp are among the most popular fish caught in our waters. They are the target of many anglers heading to the water. Carp distinguish themselves from other species by their robust build and flat ventral side. We can call it the 'king' of carp-like fish. It has a strong body and a long dorsal fin."}

  ];
  showMe:boolean=false;
  currentItem: interfejs = this.options[0];
  description(){
  if(this.showMe == false)
  {
    this.showMe= true;
  }
  else
  {
    this.showMe = false;
  }
  }
  catButton()
  {
    this.options = [
      {Number: 1, Text: '1.Cat1', Image: 'assets/Zdj/puszek2.jpg', Image1: 'assets/Zdj/puszek1.jpg', Image2: 'assets/Zdj/puszek3.jpg', Description: "Cats are smarter than dogs. According to the latest scientific research, a cat's cerebral cortex consists of 300 million neurons, while a dog's brain has only 160 million. Also, a cat's long-term memory is better than a dog's, especially when it comes to remembering what the cat did or events it participated in, rather than just what it saw. However, cats have a lower social IQ compared to dogs, which excel in interpersonal relationships. Cats form bonds only if they feel like it."},
      {Number: 2, Text: '2.Cat2', Image: 'assets/Zdj/okruszek1.jpg', Image1: 'assets/Zdj/okruszek2.jpg', Image2: 'assets/Zdj/okruszek3.jpg', Description: "Cats cannot taste sweetness. According to scientists, taste evolved to help recognize whether plants are edible and worth eating. Supporting this theory is the fact that most carnivorous animals, such as cats, hyenas, or cheetahs, did not develop the ability to detect sweet taste. For humans, sugar represents energy, and the ability to recognize it was crucial for survival. Sweet taste is not significant for carnivores because meat is not sweet. However, it has recently been discovered that cats have at least seven functional receptors that allow them to detect bitterness. There is a theory that these abilities evolved to protect cats from poisoning, as many toxic substances taste bitter."},
      {Number: 3, Text: '3.Cat3', Image: 'assets/Zdj/kacperek1.jpg', Image1: 'assets/Zdj/kacperek2.jpg', Image2: 'assets/Zdj/kacperek3.jpg', Description: "A cat's tail helps maintain balance. It seems that a cat's tail acts like a counterweight. It can be compared to a tightrope walker holding a second pole. The principle of 'tail action,' or rather using it as a counterweight, is simple. If a cat walking on a narrow ledge becomes interested in something below and decides to investigate, its movement changes the center of gravity. Balancing the tail in the opposite direction to the tilt restores the center of gravity and thus prevents the cat from falling. The tail also acts as a counterbalance when a quadruped wants to make a sudden turn while running."}
    ];

  }
  dogButton()
  {
    this.options = [
      {Number: 1, Text: '1.Dog1', Image: 'assets/Zdj/scooby1.jpg', Image1: 'assets/Zdj/scooby2.jpg', Image2: 'assets/Zdj/scooby3.jpg', Description: "Dogs can locate the source of a sound in just 6/100th of a second! They do this using their ears, acting like radar. Dogs can hear sounds from four times farther away than humans."},
      {Number: 2, Text: '2.Dog2', Image: 'assets/Zdj/gufi1.jpg', Image1: 'assets/Zdj/gufi2.jpg', Image2: 'assets/Zdj/gufi3.jpg', Description: "Patterns on a dog's nose are as unique as human fingerprints. Dogs have 319 bones! That's 112 more than humans. Do you think all dogs bark? Well, no! Basenjis are the only dog breed that doesn't bark. Puppies are born blind and deaf. Their senses develop around the 2nd or 3rd week of life. Thanks to a special membrane called the tapetum lucidum, dogs can see in the dark."}
    ];

  }
  fishButton()
  {
    this.options=[
      {Number : 1 ,Text : '1.Guppy', Image : 'assets/Zdj/gupik1.jpg',Image1 : 'assets/Zdj/gupik2.jpg',Image2 : 'assets/Zdj/gupik3.jpg',Description: "Guppies prefer moderately hard to hard water, but they do not tolerate soft water well. - A pregnant female can be recognized by a dark spot behind her anal fin, located just under her belly. The pregnancy of the female lasts on average from 4 to 6 weeks, resulting in 5 to 100 fry."},
      {Number : 2 , Text : '2.Rainbow fish', Image : 'assets/Zdj/teczanka1.jpg',Image1 : 'assets/Zdj/teczanka2.jpg',Image2 : 'assets/Zdj/teczanka3.jpg',Description: "This species thrives in densely planted areas with dark substrate and minimal lighting. Open space is also significant for neon rainbow fish, so if you decide to keep several individuals, you should have an aquarium with a capacity of up to 100 liters."},
      {Number : 3 ,Text : '3.Pleco', Image : 'assets/Zdj/glonojad1.jpg',Image1 : 'assets/Zdj/glonojad2.jpg',Image2 : 'assets/Zdj/glonojad3.jpg',Description: "Behavior of plecos: These fish are particularly active at night. During the day, they usually hide in various shelters, which should be plentiful in the aquarium. They prefer to spend time on the aquarium glass or its bottom. Common plecos are easily adaptable and non-aggressive."},
      {Number : 4 ,Text : '4.Carp', Image : 'assets/Zdj/karp1.jpg',Image1 : 'assets/Zdj/karp2.jpg',Image2 : 'assets/Zdj/karp3.jpg',Description: "Carp are among the most popular fish caught in our waters. They are the target of many anglers heading to the water. Carp distinguish themselves from other species by their robust build and flat ventral side. We can call it the 'king' of carp-like fish. It has a strong body and a long dorsal fin."}

    ];
  }




}
