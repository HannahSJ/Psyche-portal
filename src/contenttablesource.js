export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Content Name",
      width: 450,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Category",
      width: 230,
    },
  
    // {
    //   field: "age",
    //   headerName: "Age",
    //   width: 100,
    // },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "ปรับความคิดลดวิกฤติฆ่าตัวตาย",
      img: "https://picsum.photos/id/216/750/575",
      status: "active",
      email: "Article",
      age: 35,
    },
    {
      id: 2,
      username: "การปรับตัวเพื่อการนอนหลับที่ดี",
      img: "https://picsum.photos/id/175/750/575",
      email: "Article",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "ปัญหาต่าง ๆ เกี่ยวกับการนอน",
      img: "https://picsum.photos/id/292/750/575",
      email: "Article",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "การดูแลสุขภาพจิต....ช่วงวิกฤติ COVID-19",
      img: "https://picsum.photos/id/452/750/575",
      email: "Article",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "3 กลุ่มโภชนาการอาหารที่ร่างกายควรได้รับก่อนออกกำลังกาย",
      img: "https://picsum.photos/id/497/750/575",
      email: "Article",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Auto Suggestion การใช้คำพูดด้านบวกกับตัวเอง",
      img: "https://picsum.photos/id/633/750/575",
      email: "Article",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "ชื่นชม เสริมกำลัง",
      img: "https://picsum.photos/id/401/750/575",
      email: "Article",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Self Esteem การเห็นคุณค่าในตัวเองที่สร้างได้",
      img: "https://picsum.photos/id/342/750/575",
      email: "Article",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "8 เคล็ดลับช่วยพัฒนา “การออกกำลังกาย” ให้กลายเป็นนิสัย",
      img: "https://picsum.photos/id/446/750/575",
      email: "Article",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "7 เทคนิคการเข้าสังคมที่ดีควรมีอะไรบ้าง",
      img: "https://picsum.photos/id/367/750/575",
      email: "Article",
      status: "active",
      age: 65,
    },
  ];