import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://app.simpledbr.com:27017");

try {
  await client.connect();
  console.log("connected");

  const db = client.db("adresai");

  // await db.collection("zmones").insertOne({
  //     vardas: "Vardenis",
  //     pavarde: "pavardenis",
  //     alga: 156.21,
  //     kontaktai: [
  //         {
  //             tipas: "mob",
  //             reiksme: "+37069920001"
  //         },
  //         {
  //             tipas: "email",
  //             reiksme: "verdenis@gmail.com"
  //         },
  //     ]
  // });

  // const zmones = await db.collection("zmones").find().toArray();
  // select * from zmones where vardas = 'Jonas'
  // const zmones = await db.collection("zmones").find({vardas: "Jonas"}).toArray();
  // select * from zmones where alga > 200
  // const zmones = await db.collection("zmones").find({alga: {$gt: 200}}).toArray();
//   const zmones = await db.collection("zmones").find({
//     "kontaktai.komentaras": { $exists: false },
//   }).toArray();
  // await db.collection("zmones").updateOne(
  //     {_id: ObjectId("612cd00ae407d321e2c1ee3d")},
  //     {
  //         $set: {
  //             pavarde: "pakeistas pavardenis",
  //             gimimoData: new Date("2001-02-03")
  //         },
  //         $push: {kontaktai: {tipas: "darbo", reiksme: "852415161", komentaras: "nuo 8 iki 17"}}
  //     }
  // );

  // const zmones = await db.collection("zmones").find().toArray();
//   console.log(zmones);

    // await db.collection("miestai").insertMany([
    //     {
    //         pavadinimas: "Vilnius",
    //         valstybe: "LT"
    //     },
    //     {
    //         pavadinimas: "Kaunas",
    //         valstybe: "LT"
    //     },
    //     {
    //         pavadinimas: "Klaipėda",
    //         valstybe: "LT"
    //     },
    //     {
    //         pavadinimas: "Ryga",
    //         valstybe: "LV"
    //     },
    //     {
    //         pavadinimas: "Tallinn",
    //         valstybe: "EE"
    //     },
    // ]);

    const miestai = await db.collection("miestai").find({valstybe: "EE"}).toArray();
    console.log(miestai);
} catch (err) {
  console.log("Klaida", err);
} finally {
  await client.close();
  console.log("disconnected");
}
