import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017") // prisijungiama prie mongoDB

try {
    await client.connect();
    console.log("connected");

    const db = client.db("adresai");

    await db.collection("zmones").insertOne({ // pridedamas naujas zmogus
        vardas: "Vardenis",
        pavarde: "pavardenis",
        alga: 659.36,
        kontaktai: [
            {
                tipas: "mob",
                reiksme: "865963269"
            },
            {
                tipas: "email",
                reiksme: "vardenis@gmail.com"
            }
        ]
    });

    const zmones = await db.collection("zmones").find().toArray(); // atspausdinami visi duomenys is duomenu bazes masyve
    console.log(zmones);
}
catch (err) {
    console.log("klaida", err);
}
finally {
    await client.close();
    console.log("disconnected");
}