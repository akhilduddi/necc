document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
      event.preventDefault();
  }
});




document.addEventListener('keydown', function(event) {
      // Disable Ctrl+Shift+C
      if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
          event.preventDefault();
      }
});


document.addEventListener('keydown', function(event) {
  // Disable F12 (Developer Tools)
  if (event.keyCode === 123) {
      event.preventDefault();
  }

  // Disable Ctrl+U (View Source)
  if (event.ctrlKey && event.keyCode === 85) {
      event.preventDefault();
  }

  // Disable Ctrl+Shift+I (Inspect Element)
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
      event.preventDefault();
  }

  // Disable Ctrl+Shift+J (Console)
  if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
      event.preventDefault();
  }

  if (event.ctrlKey && event.keyCode === 85) {
  event.preventDefault();
  }

  // Disable Ctrl+S (Save)
  if (event.ctrlKey && event.keyCode === 83) {
      event.preventDefault();
  }
});


document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    let StudentsInfoList = [
        // place your data here

    {
        "name": "KOKKILIGADDA CHARAN KUMAR",
        "rollNo": "20471A0178",
        "parentNo": 8688251005,
        "studentNo": 6300309108
      },
      {
        "name": "ANGALAKUDITI MANOHAR",
        "rollNo": "21471A0102",
        "parentNo": 9398966980,
        "studentNo": 9573952944,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625786/CIVIL21Batch/CIVIL21BatchASection/cvckpwkxsrypendavoe1.jpg"
      },
      {
        "name": "AYINAVOLU LAKSHMI HARSHITHA",
        "rollNo": "21471A0103",
        "parentNo": 9866026366,
        "studentNo": 9912047167,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625786/CIVIL21Batch/CIVIL21BatchASection/kwk0qoi3icvelim7wds7.png"
      },
      {
        "name": "BADINEDI UDAY MANIKANTA",
        "rollNo": "21471A0104",
        "parentNo": 8978546208,
        "studentNo": 9392323313,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625786/CIVIL21Batch/CIVIL21BatchASection/xr6jtwi6jgzr9uvwpwmo.png"
      },
      {
        "name": "CHALLA NAVEEN",
        "rollNo": "21471A0105",
        "parentNo": 9553232181,
        "studentNo": 9553232181,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625788/CIVIL21Batch/CIVIL21BatchASection/dvzmabfuqqqlm00d7hec.jpg"
      },
      {
        "name": "DAVALA MERAMMA",
        "rollNo": "21471A0106",
        "parentNo": 7416647827,
        "studentNo": 9110536662,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625786/CIVIL21Batch/CIVIL21BatchASection/zbgawk5ezm8rpphbrnvl.png"
      },
      {
        "name": "ENUKULA SATHYA NARAYANA",
        "rollNo": "21471A0108",
        "parentNo": 7601077958,
        "studentNo": 8309062891,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625788/CIVIL21Batch/CIVIL21BatchASection/xseeb7vsltw40pxusi6o.png"
      },
      {
        "name": "GATTA KALI GOPI",
        "rollNo": "21471A0109",
        "parentNo": 9676051305,
        "studentNo": 7799549588
      },
      {
        "name": "KANCHAMREDDY SANTHOSH REDDY",
        "rollNo": "21471A0110",
        "parentNo": 9000807649,
        "studentNo": 8919500045,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625786/CIVIL21Batch/CIVIL21BatchASection/unic6dpknwf9y3mldqq6.png"
      },
      {
        "name": "ONTELU PAVAN",
        "rollNo": "21471A0114",
        "parentNo": 8688355842,
        "studentNo": 9848936338,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/u859j63uqifapuf8pnfe.png"
      },
      {
        "name": "PARIMI VIJENDRA STEEVEN",
        "rollNo": "21471A0115",
        "parentNo": 7093498182,
        "studentNo": 6305518422,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/sazp91gun1f8utze1o1m.png"
      },
      {
        "name": "POPURI VENKATA BHANU PRAKASH REDDY",
        "rollNo": "21471A0117",
        "parentNo": 9704874220,
        "studentNo": 9704874220,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625788/CIVIL21Batch/CIVIL21BatchASection/pvoqg4tl0i5cljd2r1cd.png"
      },
      {
        "name": "PODDUTURI MEERA VALI",
        "rollNo": "21471A0119",
        "parentNo": 9951605836,
        "studentNo": 9381103560,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625787/CIVIL21Batch/CIVIL21BatchASection/fdktxju3oujztglwg1ow.jpg"
      },
      {
        "name": "THANNIRU MANIKANTESWAR",
        "rollNo": "21471A0120",
        "parentNo": 9949895096,
        "studentNo": 9640179546,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/xzb1lqa99n04ji6wftcm.jpg"
      },
      {
        "name": "VAMSIKRISHNA GALAM",
        "rollNo": "21471A0121",
        "parentNo": 6302725849,
        "studentNo": 8074498103,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625788/CIVIL21Batch/CIVIL21BatchASection/w1wo3poy8o60wjaxxsow.png"
      },
      {
        "name": "YAMPARALA POLU RAJU",
        "rollNo": "21471A0122",
        "parentNo": 7032612045,
        "studentNo": 9063079146,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625788/CIVIL21Batch/CIVIL21BatchASection/wuuhyflpmllq5x4ovjxr.png"
      },
      {
        "name": "RAKESH RAJ",
        "rollNo": "21471A0123",
        "parentNo": 9801489826,
        "studentNo": 9122521624,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625787/CIVIL21Batch/CIVIL21BatchASection/vcenkbomtoar50fkqsxr.jpg"
      },
      {
        "name": "SHAMBHU KUMAR",
        "rollNo": "21471A0124",
        "parentNo": 7562066142,
        "studentNo": 9110126250,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625787/CIVIL21Batch/CIVIL21BatchASection/pghmtqhrfna7akueadti.jpg"
      },
      {
        "name": "SUNNY DEVAL",
        "rollNo": "21471A0125",
        "parentNo": 9142325464,
        "studentNo": 7480038418,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625787/CIVIL21Batch/CIVIL21BatchASection/thtsjnujowjnmzrmbase.png"
      },
      {
        "name": "VIVEK KUMAR",
        "rollNo": "21471A0126",
        "parentNo": 8804292472,
        "studentNo": 9693709116,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625788/CIVIL21Batch/CIVIL21BatchASection/d3ztml0tkilpsqsgk0cz.png"
      },
      {
        "name": "SANCHIT KUMAR",
        "rollNo": "21471A0127",
        "parentNo": 9661716492,
        "studentNo": 8092069289,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625788/CIVIL21Batch/CIVIL21BatchASection/nhkpqruqgsiwkggze5mg.png"
      },
      {
        "name": "MELIMI ASHOK",
        "rollNo": "21471A0128",
        "parentNo": 8340070753,
        "studentNo": 8340070753,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625787/CIVIL21Batch/CIVIL21BatchASection/akogbrdlva3mhkbwrpiz.jpg"
      },
      {
        "name": "GELLA GOPI",
        "rollNo": "21471A0129",
        "parentNo": 7989932858,
        "studentNo": 7989932858,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625787/CIVIL21Batch/CIVIL21BatchASection/wgmarouv66ardmfpfpuy.jpg"
      },
      {
        "name": "ANNAPAREDDY AKHIL REDDY",
        "rollNo": "21471A0130",
        "parentNo": 7702560146,
        "studentNo": "99086 98367",
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625787/CIVIL21Batch/CIVIL21BatchASection/v6qdxyz6lbb1ct5xtdja.jpg"
      },
      {
        "name": "PAMURI SHAIK ADAM SHAFI",
        "rollNo": "22475A0101",
        "parentNo": 8328098925,
        "studentNo": 8328098925,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/kohnjwrnclyrgbnpxuxf.jpg"
      },
      {
        "name": "MADDU MANOJ",
        "rollNo": "22475A0102",
        "parentNo": 9381909839,
        "studentNo": 9676792700,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/sxnimx390rh74kvwpzcb.jpg"
      },
      {
        "name": "KARUPARTHI SAI NAGA SUJITH",
        "rollNo": "22475A0103",
        "parentNo": 9676675650,
        "studentNo": 7780792227,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/zauzi5bekgbq77csqawp.jpg"
      },
      {
        "name": "CHALLA CHIRANJEEVI",
        "rollNo": "22475A0104",
        "parentNo": 9640471466,
        "studentNo": 7093730050,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/ttflyb0xexuel217bk4w.jpg"
      },
      {
        "name": "POTU VENKATA SIVA LAKSHMAN",
        "rollNo": "22475A0105",
        "parentNo": 7095788783,
        "studentNo": 7095788783,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/emg21b8jvmshelwjlaif.jpg"
      },
      {
        "name": "JAVVAJI MAHESH",
        "rollNo": "22475A0106",
        "parentNo": 9705487845,
        "studentNo": 8688173490,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/h5s6t3ymglh6euie1jsv.jpg"
      },
      {
        "name": "PALAPARTHI PEDDABBAI",
        "rollNo": "22475A0107",
        "parentNo": 7382639562,
        "studentNo": 9391592851,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/syq0naaxd6oj1kj4ojm9.jpg"
      },
      {
        "name": "AKKEM NAGA LAKSHMI",
        "rollNo": "22475A0108",
        "parentNo": 7993924120,
        "studentNo": 7601000751,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/ozgnbnmvbtauymyh9nbt.jpg"
      },
      {
        "name": "KURAPATI ANIL",
        "rollNo": "22475A0109",
        "parentNo": 9182162266,
        "studentNo": 9908387668,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/uxkxazqfzpbuf6djfs6x.jpg"
      },
      {
        "name": "KURRI VENU GOPAL",
        "rollNo": "22475A0111",
        "parentNo": 8500419606,
        "studentNo": 9515216434,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625783/CIVIL21Batch/CIVIL21BatchASection/dmexjfpzf7dfkno7yncz.jpg"
      },
      {
        "name": "MADAMSETTI SURESH",
        "rollNo": "22475A0112",
        "parentNo": 7032445717,
        "studentNo": 8688541989,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625783/CIVIL21Batch/CIVIL21BatchASection/coytvvifvetrkerfrsas.jpg"
      },
      {
        "name": "MARRI VENKATESWARA REDDY",
        "rollNo": "22475A0113",
        "parentNo": 8019403488,
        "studentNo": 9182962541,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/fkmwfjwr2bbyub8hg4oy.jpg"
      },
      {
        "name": "NAGOTHULLA CHANDRA SEKHAR",
        "rollNo": "22475A0114",
        "parentNo": 9160258423,
        "studentNo": 8688337542,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625783/CIVIL21Batch/CIVIL21BatchASection/tjjp0gum3ayoyjjcdsn0.jpg"
      },
      {
        "name": "MARIPUDI SAI NAGENDRA",
        "rollNo": "22475A0115",
        "parentNo": 9441826783,
        "studentNo": 9398208614,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/xjeltramivehyob2yuuv.jpg"
      },
      {
        "name": "VANKUDAVATHU KUMAR NAIK",
        "rollNo": "22475A0116",
        "parentNo": 9000613519,
        "studentNo": 8522025841,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625783/CIVIL21Batch/CIVIL21BatchASection/nhsnretswtt8plxiypkq.jpg"
      },
      {
        "name": "GANDEPALLI NAGENDRA BABU",
        "rollNo": "22475A0117",
        "parentNo": 7306410089,
        "studentNo": 7981829165,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/ljtvq9jb5l8x8gxtpvpv.jpg"
      },
      {
        "name": "TATIKONDA NARENDRANATH KESAV",
        "rollNo": "22475A0118",
        "parentNo": 7842666936,
        "studentNo": 8121666936,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/jxot6n88jfnbmunxkylp.jpg"
      },
      {
        "name": "PANDURU MANIKANTA",
        "rollNo": "22475A0119",
        "parentNo": 8978572658,
        "studentNo": 9121802943,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625783/CIVIL21Batch/CIVIL21BatchASection/lafbqqrdpchody42n1ot.jpg"
      },
      {
        "name": "SHAIK MANSUR",
        "rollNo": "22475A0120",
        "parentNo": 9248793726,
        "studentNo": 8185014950,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625782/CIVIL21Batch/CIVIL21BatchASection/wzmnqxyzxpallu2xs8tf.jpg"
      },
      {
        "name": "URIBINDI PEDDA VENKATESWARLU",
        "rollNo": "22475A0121",
        "parentNo": 9059372179,
        "studentNo": 9959823891,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625783/CIVIL21Batch/CIVIL21BatchASection/s02xl2vydkneqfllvjog.jpg"
      },
      {
        "name": "POTHIREDDY GANESH KUMAR REDDY",
        "rollNo": "22475A0122",
        "parentNo": 9705657053,
        "studentNo": 8179182683,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625783/CIVIL21Batch/CIVIL21BatchASection/rjckqtnpvorc3crbztnx.jpg"
      },
      {
        "name": "SHAIK ISMAIL",
        "rollNo": "22475A0123",
        "parentNo": 9985934744,
        "studentNo": 7075633142,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625782/CIVIL21Batch/CIVIL21BatchASection/xvyo3ooca32plr1yoig7.jpg"
      },
      {
        "name": "PODILA SRIKANTH",
        "rollNo": "22475A0124",
        "parentNo": 7659917821,
        "studentNo": 6305294079,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/u2mbtknjjvijrqg2a4md.jpg"
      },
      {
        "name": "SEGGEM TAGORE",
        "rollNo": "22475A0125",
        "parentNo": 9515284183,
        "studentNo": 7036010148,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/meywi1r3zrtibvu0zwcw.jpg"
      },
      {
        "name": "SHAIK MOHAMMAD ALTHAF",
        "rollNo": "22475A0126",
        "parentNo": 8790200121,
        "studentNo": 9000628962,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/oqmittplummeb2ozzofa.jpg"
      },
      {
        "name": "NALLABOTHULA LOKESH",
        "rollNo": "22475A0127",
        "parentNo": 9000282588,
        "studentNo": 8096541517,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625782/CIVIL21Batch/CIVIL21BatchASection/tcpv4d1tiwxiteicwhbu.jpg"
      },
      {
        "name": "SHAIK RAJIYA JASMINE",
        "rollNo": "22475A0128",
        "parentNo": 8919086168,
        "studentNo": 8919086168,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625782/CIVIL21Batch/CIVIL21BatchASection/duhsfvsbbpdqclwljkxi.jpg"
      },
      {
        "name": "CHETHARAJUPALLI AMARNADH",
        "rollNo": "22475A0129",
        "parentNo": 8333954829,
        "studentNo": 9381702538,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625785/CIVIL21Batch/CIVIL21BatchASection/xxy8z1xdfp62v3wsosqj.jpg"
      },
      {
        "name": "YEDUPATI NARENDRA",
        "rollNo": "22475A0130",
        "parentNo": 9502311533,
        "studentNo": 6301778279,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625782/CIVIL21Batch/CIVIL21BatchASection/eakglr8dlua6usjciqvy.jpg"
      },
      {
        "name": "SWARNA LURDHU KIRAN KUMAR",
        "rollNo": "22475A0131",
        "parentNo": 7330742625,
        "studentNo": 9398256434,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625784/CIVIL21Batch/CIVIL21BatchASection/rnhol1131eja7nmuhaem.jpg"
      },
      {
        "name": "BOJJA VENKATA NAGA MEALLESWARI",
        "rollNo": "22475A0132",
        "parentNo": 9542552869,
        "studentNo": 9652310951,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625782/CIVIL21Batch/CIVIL21BatchASection/jq22nuraq7r0ecwnnzjh.jpg"
      }
    
    ];

    
        const searchContainer = document.createElement("div");
        searchContainer.classList.add("search-container", "fixed-top");
    
        const searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "Enter Roll Number";
        searchInput.classList.add("search-input");  
        searchContainer.appendChild(searchInput);
    
        StudentsInfo.insertBefore(searchContainer, StudentsInfo.firstChild);
    
        function getFormattedDate() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
            return now.toLocaleDateString(undefined, options);
        }
    
        function createStudentCard(student) {
            const card = document.createElement("div");
            card.classList.add("card", "student-card");
            card.dataset.rollNo = student.rollNo;
    
            const infoDiv = document.createElement("div");
            infoDiv.classList.add("info");
    
            const imageDiv = document.createElement("div");
            imageDiv.classList.add("image-div");
    
            const image = document.createElement("img");
            image.src = student.imageUrl ? student.imageUrl : "https://res.cloudinary.com/dfl09yw03/image/upload/c_crop,g_auto,h_800,w_800/n98sq90nqivjiio1bmho.jpg";
            image.alt = student.name;
            image.classList.add("card-img-top", "mb-3");
            imageDiv.appendChild(image);
    
            const textContainer = document.createElement("div");
            textContainer.classList.add("text-container");
    
            const name = document.createElement("h5");
            name.textContent = student.name;
            name.classList.add("card-title");
            textContainer.appendChild(name);
    
            const rollNumber = document.createElement("p");
            rollNumber.textContent = student.rollNo;
            rollNumber.classList.add("card-text", "mb-3");
            textContainer.appendChild(rollNumber);
    
            infoDiv.appendChild(imageDiv);
            infoDiv.appendChild(textContainer);
    
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body", "mb-3");
    
            const buttonsDiv = document.createElement("div");
            buttonsDiv.classList.add("buttons");
    
            const studentButtonsDiv = document.createElement("div");
            studentButtonsDiv.classList.add("student-buttons");
    
            const callStudentButton = document.createElement("button");
            callStudentButton.textContent = student.studentNo ? "Call Student" : "No Student Phone";
            callStudentButton.disabled = !student.studentNo;
            callStudentButton.classList.add("btn", "btn-primary");
            if (!student.studentNo) {
                callStudentButton.classList.add("button-disabled");
            } else {
                callStudentButton.onclick = () => {
                    window.location.href = `tel:+91${student.studentNo}`;
                };
            }
            studentButtonsDiv.appendChild(callStudentButton);
    
            const messageStudentButton = document.createElement("button");
            messageStudentButton.textContent = student.studentNo ? "Message Student" : "No Student Phone";
            messageStudentButton.disabled = !student.studentNo;
            messageStudentButton.classList.add("btn", "btn-primary");
            if (!student.studentNo) {
                messageStudentButton.classList.add("button-disabled");
            } else {
                messageStudentButton.onclick = () => {
                    const message = `You are ${student.name} (${student.rollNo}) absent for the ${getFormattedDate()} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                    window.location.href = `sms:+91${student.studentNo}?body=${encodeURIComponent(message)}`;
                };
            }
            studentButtonsDiv.appendChild(messageStudentButton);
    
            const parentButtonsDiv = document.createElement("div");
            parentButtonsDiv.classList.add("parent-buttons");
    
            const callParentButton = document.createElement("button");
            callParentButton.textContent = student.parentNo ? "Call Parent" : "No Parent Phone";
            callParentButton.disabled = !student.parentNo;
            callParentButton.classList.add("btn", "btn-primary");
            if (!student.parentNo) {
                callParentButton.classList.add("button-disabled");
            } else {
                callParentButton.onclick = () => {
                    window.location.href = `tel:+91${student.parentNo}`;
                };
            }
            parentButtonsDiv.appendChild(callParentButton);
    
            const messageParentButton = document.createElement("button");
            messageParentButton.textContent = student.parentNo ? "Message Parent" : "No Parent Phone";
            messageParentButton.disabled = !student.parentNo;
            messageParentButton.classList.add("btn", "btn-primary");
            if (!student.parentNo) {
                messageParentButton.classList.add("button-disabled");
            } else {
                messageParentButton.onclick = () => {
                    const message = `Your ward ${student.name} (${student.rollNo}) is absent for the ${getFormattedDate()} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                    window.location.href = `sms:+91${student.parentNo}?body=${encodeURIComponent(message)}`;
                };
            }
            parentButtonsDiv.appendChild(messageParentButton);
    
            buttonsDiv.appendChild(studentButtonsDiv);
            buttonsDiv.appendChild(parentButtonsDiv);
    
            cardBody.appendChild(buttonsDiv);
            card.appendChild(infoDiv);
            card.appendChild(cardBody);
    
            StudentsInfo.appendChild(card);
        }
    
        function filterStudents() {
            const rollNumber = searchInput.value.trim().toLowerCase();
            const cards = document.querySelectorAll('.student-card');
    
            cards.forEach(card => {
                const cardRollNo = card.dataset.rollNo.toLowerCase();
                card.style.display = rollNumber === "" || cardRollNo.includes(rollNumber) ? "flex" : "none";
            });
        }
    
        StudentsInfoList.forEach(createStudentCard);
    
        searchInput.addEventListener("input", filterStudents);
    });
    