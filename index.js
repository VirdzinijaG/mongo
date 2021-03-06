import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017") // prisijungiama prie mongoDB

try {
    await client.connect();
    console.log("connected");

    const db = client.db("adresai");

    // await db.collection("zmones").insertOne({ // pridedamas naujas zmogus
    //     vardas: "Vardenis",
    //     pavarde: "pavardenis",
    //     alga: 659.36,
    //     kontaktai: [
    //         {
    //             tipas: "mob",
    //             reiksme: "865963269"
    //         },
    //         {
    //             tipas: "email",
    //             reiksme: "vardenis@gmail.com"
    //         }
    //     ]
    // });

    // const zmones = await db.collection("zmones").find().toArray(); // atspausdinami visi duomenys is duomenu bazes masyve
    // const zmones = await db.collection("zmones").find({vardas: "Jonas"}).toArray(); // atspaudins reiksmes, kur vardas yra Jonas
    // const zmones = await db.collection("zmones").find({alga: {$gt: 200}}).toArray(); // atspausdins reiksmes, kur alga didesne nei 200

    // await db.collection("zmones").updateOne( // keiciama informacija apie zmogu
    //     { _id: ObjectId("6135e0e54e781c4912caa704")}, // nurodomas koks id, value
    //     {
    //         $set: { // set nustatyti naujas reiksmes laukams
    //             pavarde: "pakeista pavarde", // pakeista reiksme
    //             gimimoData: new Date("2021-02-03") // pridetas naujas laukas
    //         },
    //         $push: { kontaktai: { tipas: "darbo", reiksme: "86985653", komentaras: "nuo 8 iki 17 val" } } // push pridedamas naujas objektas
    //     }
    // )
    // const zmones = await db.collection("zmones").find().toArray();

    // const zmones = await db.collection("zmones").find({ "kontaktai.komentaras": { $exists: true } }).toArray(); // atspausdina irasus, pas kuriuose yra kontaktuose komentaras // su false atspausdins tuos, kurie neturi komentaro neegzistuoja

    // console.log(zmones);

    // await db.collection("miestai").insertMany([ // sukuriamas naujas collection miestai, kurio duomenu bazeje nebuvo ir pridedami miestai
    //     {
    //         pavadinimas: "Vilnius",
    //         valstybe: "LT"
    //     },
    //     {
    //         pavadinimas: "Kaunas",
    //         valstybe: "LT"
    //     },
    //     {
    //         pavadinimas: "Klaipeda",
    //         valstybe: "LT"
    //     },
    //     {
    //         pavadinimas: "Ryga",
    //         valstybe: "Lv"
    //     },
    //     {
    //         pavadinimas: "Tallin",
    //         valstybe: "EE"
    //     },
    // ]);

    // const miestai = await db.collection("miestai").find().toArray();

    const miestai = await db.collection("miestai").find({valstybe: "LT"}).toArray();

    console.log(miestai);
}
catch (err) {
    console.log("klaida", err);
}
finally {
    await client.close();
    console.log("disconnected");
}