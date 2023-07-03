package com.example.gamerankings.components;

import com.example.gamerankings.models.Game;
import com.example.gamerankings.models.GameUser;
import com.example.gamerankings.models.Platform;
import com.example.gamerankings.models.User;
import com.example.gamerankings.repositories.GameRepository;
import com.example.gamerankings.repositories.GameUserRepository;
import com.example.gamerankings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    GameRepository gameRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    GameUserRepository gameUserRepository;

    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) {
        Game ff16 = new Game("Final Fantasy XVI", "final-fantasy-xvi", "https://gamefaqs.gamespot.com/a/box/1/9/4/769194_front.jpg", "RPG", "Description", 2023);
        gameRepository.save(ff16);

        Game diablo4 = new Game("Diablo 4", "diablo-4", "https://gamefaqs.gamespot.com/a/box/1/2/3/909123_front.jpg", "ARPG", "Description", 2023);
        gameRepository.save(diablo4);

        Game wiiSports = new Game("Wii Sports", "wii-sports", "https://gamefaqs.gamespot.com/a/box/1/2/0/76120_front.jpg", "Sports", "Game about sports on the Wii", 2006);
        gameRepository.save(wiiSports);

        Game simpsonsWrestling = new Game("Simpsons Wrestling", "simpsons-wrestling", "https://gamefaqs.gamespot.com/a/box/0/6/8/10068_front.jpg", "Sports", "description", 2001);
        gameRepository.save(simpsonsWrestling);

        Game theSims4 = new Game("The Sims 4", "the-sims-4", "https://gamefaqs.gamespot.com/a/box/7/7/7/279777_front.jpg", "Simulation", "description", 2014);
        gameRepository.save(theSims4);

        Game streetFighter6 = new Game("Street Fighter 6", "street-fighter-6", "https://gamefaqs.gamespot.com/a/box/1/9/0/940190_front.jpg", "Fighting", "description", 2023);
        gameRepository.save(streetFighter6);

        Game streetFighterV = new Game("Street Fighter V", "street-fighter-v", "https://gamefaqs.gamespot.com/a/box/7/4/4/736744_front.jpg", "Fighting", "description", 2016);
        gameRepository.save(streetFighterV);

        Game finalFantasy7Remake = new Game("Final Fantasy VII Remake", "final-fantasy-vii-remake", "https://gamefaqs.gamespot.com/a/box/1/7/3/789173_front.jpg", "RPG", "description", 2020);
        gameRepository.save(finalFantasy7Remake);

        Game trailsOfColdSteel = new Game("The Legend of Heroes: Trails of Cold Steel", "the-legends-of-heroes-trails-of-cold-steel", "https://gamefaqs.gamespot.com/a/box/2/0/4/707204_front.jpg", "RPG", "description", 2015);
        gameRepository.save(trailsOfColdSteel);

        Game tearsOfTheKingdom = new Game("The Legend of Zelda: Tears of the Kingdom", "the-legend-of-zelda-tears-of-the-kingdom", "https://gamefaqs.gamespot.com/a/box/0/6/1/939061_front.jpg", "Adventure", "description", 2023);
        gameRepository.save(tearsOfTheKingdom);

        Game breathOfTheWild = new Game("The Legend of Zelda: Breath of the Wild", "the-legend-of-zelda-breath-of-the-wild", "https://gamefaqs.gamespot.com/a/box/6/6/4/599664_front.jpg", "Adventure", "description", 2017);
        gameRepository.save(breathOfTheWild);

        Game finalFantasy7 = new Game("Final Fantasy VII", "final-fantasy-vii", "https://gamefaqs.gamespot.com/a/box/7/7/7/777_front.jpg", "RPG", "description", 1998);
        gameRepository.save(finalFantasy7);

        Game finalFantasy8 = new Game("Final Fantasy VIII", "final-fantasy-viii", "https://gamefaqs.gamespot.com/a/box/6/5/5/3655_front.jpg", "RPG", "description", 1999);
        gameRepository.save(finalFantasy8);

        Game finalFantasyX = new Game("Final Fantasy X", "final-fantasy-x", "https://gamefaqs.gamespot.com/a/box/6/6/7/3667_front.jpg", "RPG", "description", 2000);
        gameRepository.save(finalFantasyX);

        Game cyberpunk = new Game("Cyberpunk 2077", "cyberpunk-2077", "https://gamefaqs.gamespot.com/a/box/6/5/5/715655_front.jpg", "RPG", "description", 2020);
        gameRepository.save(cyberpunk);

        Game mortalKombat11 = new Game("Mortal Kombat 11", "mortal-kombat-11", "https://gamefaqs.gamespot.com/a/box/2/5/8/694258_front.jpg", "Fighting", "description", 2019);
        gameRepository.save(mortalKombat11);

        Game uncharted4 = new Game("Uncharted 4: A Thief's End", "uncharted-4", "https://gamefaqs.gamespot.com/a/box/7/1/3/331713_front.jpg", "Action", "description", 2016);
        gameRepository.save(uncharted4);

        Game theLastOfUs = new Game("The Last of Us", "the-last-of-us", "https://gamefaqs.gamespot.com/a/box/2/9/0/216290_front.jpg", "Action", "description", 2013);
        gameRepository.save(theLastOfUs);

        Game theLastOfUsPt2 = new Game("The Last of Us Part II", "the-last-of-us-part-ii", "https://gamefaqs.gamespot.com/a/box/0/3/8/620038_front.jpg", "Action", "description", 2020);
        gameRepository.save(theLastOfUsPt2);

        Game nierAutomata = new Game("Nier Automata", "nier-automata", "https://gamefaqs.gamespot.com/a/box/7/5/2/574752_front.jpg", "RPG", "description", 2017);
        gameRepository.save(nierAutomata);

        Game persona3 = new Game("Persona 3", "persona-3", "https://gamefaqs.gamespot.com/a/box/3/0/8/74308_front.jpg", "RPG", "description", 2008);
        gameRepository.save(persona3);

        Game persona4 = new Game("Persona 4", "persona-4", "https://gamefaqs.gamespot.com/a/box/5/2/4/95524_front.jpg", "RPG", "description", 2008);
        gameRepository.save(persona4);

        Game persona5 = new Game("Persona 5", "persona-5", "https://gamefaqs.gamespot.com/a/box/7/3/7/706737_front.jpg", "RPG", "description", 2017);
        gameRepository.save(persona5);

        Game ghostOfTsushima = new Game("Ghost of Tsushima", "ghost-of-tsushima", "https://gamefaqs.gamespot.com/a/box/8/7/1/744871_front.jpg", "Adventure", "description", 2020);
        gameRepository.save(ghostOfTsushima);

        Game forzaHorizon5 = new Game("Forza Horizon 5", "forza-horizon-5", "https://gamefaqs.gamespot.com/a/box/4/5/8/808458_front.jpg", "Racing", "description", 2021);
        gameRepository.save(forzaHorizon5);

        Game haloInfinite = new Game("Halo Infinite", "halo-infinite", "https://gamefaqs.gamespot.com/a/box/6/4/2/715642_front.jpg", "Shooter", "description", 2021);
        gameRepository.save(haloInfinite);

        Game finalFantasyXV = new Game("Final Fantasy XV", "final-fantasy-xv", "https://gamefaqs.gamespot.com/a/box/5/7/7/807577_front.jpg", "RPG", "description", 2016);
        gameRepository.save(finalFantasyXV);

        Game dragonQuestXI = new Game("Dragon Quest XI: Echoes of an Elusive Age", "dragon-quest-xi", "https://gamefaqs.gamespot.com/a/box/4/6/8/582468_front.jpg", "RPG", "description", 2017);
        gameRepository.save(dragonQuestXI);

        Game guiltyGearStrive = new Game("Guilty Gear: Strive", "guilty-gear-strive", "https://gamefaqs.gamespot.com/a/box/4/2/1/775421_front.jpg", "Fighting", "description", 2021);
        gameRepository.save(guiltyGearStrive);

        Game rocketLeague = new Game("Rocket League", "rocket-league", "https://gamefaqs.gamespot.com/a/box/1/0/3/601103_front.jpg", "Sports", "description", 2015);
        gameRepository.save(rocketLeague);

        Game fortnite = new Game("Fortnite", "fortnite", "https://gamefaqs.gamespot.com/a/box/1/7/4/635174_front.jpg", "Battle Royale", "description", 2017);
        gameRepository.save(fortnite);

        Game valorant = new Game("Valorant", "valorant", "https://gamefaqs.gamespot.com/a/box/0/2/8/825028_front.jpg", "Shooter", "description", 2020);
        gameRepository.save(valorant);

        Game redDeadRedemption2 = new Game("Red Dead Redemption 2", "red-dead-redemption-2", "https://gamefaqs.gamespot.com/a/box/4/7/8/674478_front.jpg", "Adventure", "description", 2018);
        gameRepository.save(redDeadRedemption2);

        Game metalGearSolid = new Game("Metal Gear Solid", "metal-gear-solid", "https://gamefaqs.gamespot.com/a/box/1/4/2/5142_front.jpg", "Action", "description", 1998);
        gameRepository.save(metalGearSolid);

        Game metalGearSolid2 = new Game("Metal Gear Solid 2: Sons of Liberty", "metal-gear-solid-2", "https://gamefaqs.gamespot.com/a/box/3/1/9/504319_front.jpg", "Action", "description", 2001);
        gameRepository.save(metalGearSolid2);

        Game metalGearSolid3 = new Game("Metal Gear Solid 3: Snake Eater", "metal-gear-solid-3", "https://gamefaqs.gamespot.com/a/box/4/3/8/53438_front.jpg", "Action", "description", 2004);
        gameRepository.save(metalGearSolid3);

        Game metalGearSolid4 = new Game("Metal Gear Solid 4: Guns of the Patriots", "metal-gear-solid-4", "https://gamefaqs.gamespot.com/a/box/9/0/5/65905_front.jpg", "Action", "description", 2008);
        gameRepository.save(metalGearSolid4);

        Game metalGearSolid5 = new Game("Metal Gear Solid V: The Phantom Pain", "metal-gear-solid-v", "https://gamefaqs.gamespot.com/a/box/8/2/6/247826_front.jpg", "Action", "description", 2015);
        gameRepository.save(metalGearSolid5);

        Game deathStranding = new Game("Death Stranding", "death-stranding", "https://gamefaqs.gamespot.com/a/box/5/2/8/713528_front.jpg", "Adventure", "description", 2019);
        gameRepository.save(deathStranding);

        Game grandTheftAutoV = new Game("Grand Theft Auto V", "grand-theft-auto-v", "https://gamefaqs.gamespot.com/a/box/4/0/4/437404_front.jpg", "Action Adventure", "description", 2013);
        gameRepository.save(grandTheftAutoV);

        Game grandTheftAutoIII = new Game("Grand Theft Auto III", "grand-theft-auto-iii", "https://gamefaqs.gamespot.com/a/box/6/4/6/12646_front.jpg", "Action Adventure", "description", 2001);
        gameRepository.save(grandTheftAutoIII);

        Game grandTheftAutoViceCity = new Game("Grand Theft Auto: Vice City", "grand-theft-auto-vice-city", "https://gamefaqs.gamespot.com/a/box/2/8/9/18289_front.jpg", "Action Adventure", "description", 2002);
        gameRepository.save(grandTheftAutoViceCity);

        Game grandTheftAutoSanAndreas = new Game("Grand Theft Auto: San Andreas", "grand-theft-auto-san-andreas", "https://gamefaqs.gamespot.com/a/box/8/5/7/53857_front.jpg", "Action Adventure", "description", 2004);
        gameRepository.save(grandTheftAutoSanAndreas);

        Game bayonetta = new Game("Bayonetta", "bayonetta", "https://gamefaqs.gamespot.com/a/box/0/3/6/97036_front.jpg", "Action", "description", 2010);
        gameRepository.save(bayonetta);

        Game bayonetta2 = new Game("Bayonetta 2", "bayonetta-2", "https://gamefaqs.gamespot.com/a/box/4/2/2/249422_front.jpg", "Action", "description", 2014);
        gameRepository.save(bayonetta2);

        Game devilMayCryV = new Game("Devil May Cry 5", "devil-may-cry-5", "https://gamefaqs.gamespot.com/a/box/7/8/2/675782_front.jpg", "Action", "description", 2019);
        gameRepository.save(devilMayCryV);

        Game devilMayCry3 = new Game("Devil May Cry 3: Dante's Awakening", "devil-may-cry-3", "https://gamefaqs.gamespot.com/a/box/1/0/9/60109_front.jpg", "Action", "description", 2005);
        gameRepository.save(devilMayCry3);

        Game darkSouls = new Game("Dark Souls", "dark-souls", "https://gamefaqs.gamespot.com/a/box/4/2/5/164425_front.jpg", "RPG", "description", 2011);
        gameRepository.save(darkSouls);

        Game eldenRing = new Game("Elden Ring", "elden-ring", "https://gamefaqs.gamespot.com/a/box/7/8/0/803780_front.jpg", "RPG", "description", 2022);
        gameRepository.save(eldenRing);

        Game godOfWar = new Game("God of War", "god-of-war-2018", "https://gamefaqs.gamespot.com/a/box/5/3/7/602537_front.jpg", "Action", "description", 2018);
        gameRepository.save(godOfWar);

        User ross = new User("rossaitken", "password");
        userRepository.save(ross);

        User sam = new User("samhouston", "password");
        userRepository.save(sam);

        GameUser gameUser = new GameUser(ff16, ross, 1824);
        GameUser gu1 = new GameUser(diablo4, ross, 1544);
        GameUser gu2 = new GameUser(wiiSports, ross, 1563);
        GameUser gu3 = new GameUser(simpsonsWrestling, ross, 2000);
        gameUserRepository.save(gameUser);
        gameUserRepository.save(gu1);
        gameUserRepository.save(gu2);
        gameUserRepository.save(gu3);
    }
}
