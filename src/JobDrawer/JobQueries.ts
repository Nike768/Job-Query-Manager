// Type definition for each job query item
interface JobQuery {
    id: string;
    title: string;
    company: string;
    location: string;
    openings: number;
    editDate: string;
    editedBy: string;
}

// Static job query data
export const jobQueries: JobQuery[] = [
    {
        id: "1",
        title: "Business Development Manager (BDM)",
        company: "Phonepe",
        location: "Bhopal, Indore, Ratlam",
        openings: 86,
        editDate: "13 Mar 2025",
        editedBy: "alik@hunar.ai"
    },
    {
        id: "2",
        title: "Business Development Manager (BDM)",
        company: "Phonepe",
        location: "Jabalpur",
        openings: 32,
        editDate: "12 Mar 2025",
        editedBy: "aniket@hunar.ai"
    },
    {
        id: "3",
        title: "Customer Service Executive CSS",
        company: "Croma",
        location: "Bangalore",
        openings: 29,
        editDate: "11 Mar 2025",
        editedBy: "alik@hunar.ai"
    },
    {
        id: "4",
        title: "Customer Service Executive CSS",
        company: "Croma",
        location: "Lucknow",
        openings: 10,
        editDate: "10 Mar 2025",
        editedBy: "krishna@hunar.ai"
    },
    {
        id: "5",
        title: "Business Development Manager (BDM)",
        company: "Phonepe",
        location: "Ratlam",
        openings: 45,
        editDate: "10 Mar 2025",
        editedBy: "aniket@hunar.ai"
    },
    {
        id: "6",
        title: "Business Development Manager (BDM)",
        company: "Phonepe",
        location: "Bhopal",
        openings: 26,
        editDate: "10 Mar 2025",
        editedBy: "krishna@hunar.ai"
    },
];