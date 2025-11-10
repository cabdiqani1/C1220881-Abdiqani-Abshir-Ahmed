 // app.js
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db('universitydb');
    const students = db.collection('students');

    // //insert many students
    // const insertResult = await students.insertMany([
    //   { name: "Ali", age: 21, department: "IT", year: 2 },
    //   { name: "Hawa", age: 23, department: "CS", year: 3 },
    //   { name: "Gedi", age: 22, department: "Math", year: 4 },
    //   { name: "Omar", age: 20, department: "IT", year: 1 },
    //   { name: "Fatima", age: 24, department: "CS", year: 4 }
    // ]);
    // console.log(`🟢 Inserted ${insertResult.insertedCount} students.\n`);

    //Find all students
    const allStudents = await students.find({}).toArray();
    console.log("📘 All Students:");
    console.log(allStudents);
    console.log("\n");

    // // find students with filter 
    // const itStudents = await students.find({ department: "IT" }).toArray();
    // console.log("🎯 Students from IT Department:");
    // console.log(itStudents);
    // console.log("\n");

    // // 4️⃣ Show name & department
    // const specificFields = await students.find(
    //   {},
    //   { projection: { name: 1, department: 1, _id: 0 } }
    // ).toArray();
    // console.log("📑 Specific Fields (Name & Department Only):");
    // console.log(specificFields);
    // console.log("\n");

    // // 5️⃣ Update one students
    // const updateOneResult = await students.updateOne(
    //   { name: "Ali" },
    //   { $set: { department: "Software Engineering", year: 3 } }
    // );
    // console.log(`✏️ Updated ${updateOneResult.modifiedCount} student (Ali).\n`);

    // 6️⃣ Update many students
    // const updateManyResult = await students.updateMany(
    //   { department: "CS" },
    //   { $set: { status: "active" } }
    // );
    // console.log(`🧱 Updated ${updateManyResult.modifiedCount} students in CS department.\n`);

    // 7️⃣ Delete one stu
    // const deleteOneResult = await students.deleteOne({ name: "Omar" });
    // console.log(`🗑️ Deleted ${deleteOneResult.deletedCount} student (Omar).\n`);

    // // 8️⃣ Delete many students
    // const deleteManyResult = await students.deleteMany({ department: "Math" });
    // console.log(`❌ Deleted ${deleteManyResult.deletedCount} students from Math department.\n`);

    // ✅ FINAL RESULT AFTER ALL OPERATIONS
    // const finalList = await students.find({}).toArray();
    // console.log("📗 Final List of Students After All Operations:");
    // console.log(finalList);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("\nConnection closed.");
  }
}

run();
