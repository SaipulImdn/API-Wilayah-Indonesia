// src/data/wilayah.ts

export const wilayahData = {
  provinsi: [
    {
      id: 1,
      name: "Jawa Barat",
      kabupaten: [
        {
          id: 1,
          name: "Bandung",
          kecamatan: [
            {
              id: 1,
              name: "Coblong",
              kelurahan: [
                { id: 1, name: "Dago" },
                { id: 2, name: "Lebak Gede" },
              ],
            },
            {
              id: 2,
              name: "Sukajadi",
              kelurahan: [
                { id: 3, name: "Pasteur" },
                { id: 4, name: "Cipedes" },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Bogor",
          kecamatan: [
            {
              id: 3,
              name: "Bogor Utara",
              kelurahan: [
                { id: 5, name: "Tegal Gundil" },
                { id: 6, name: "Cibuluh" },
              ],
            },
            {
              id: 4,
              name: "Bogor Selatan",
              kelurahan: [
                { id: 7, name: "Batutulis" },
                { id: 8, name: "Empang" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Jawa Timur",
      kabupaten: [
        {
          id: 3,
          name: "Surabaya",
          kecamatan: [
            {
              id: 5,
              name: "Sukolilo",
              kelurahan: [
                { id: 9, name: "Keputih" },
                { id: 10, name: "Gebang" },
              ],
            },
            {
              id: 6,
              name: "Gubeng",
              kelurahan: [
                { id: 11, name: "Airlangga" },
                { id: 12, name: "Baratajaya" },
              ],
            },
          ],
        },
        {
          id: 4,
          name: "Malang",
          kecamatan: [
            {
              id: 7,
              name: "Klojen",
              kelurahan: [
                { id: 13, name: "Oro-Oro Dowo" },
                { id: 14, name: "Samaan" },
              ],
            },
            {
              id: 8,
              name: "Blimbing",
              kelurahan: [
                { id: 15, name: "Blimbing" },
                { id: 16, name: "Polowijen" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Bali",
      kabupaten: [
        {
          id: 5,
          name: "Denpasar",
          kecamatan: [
            {
              id: 9,
              name: "Denpasar Barat",
              kelurahan: [
                { id: 17, name: "Padangsambian" },
                { id: 18, name: "Dauh Puri" },
              ],
            },
            {
              id: 10,
              name: "Denpasar Timur",
              kelurahan: [
                { id: 19, name: "Sumerta" },
                { id: 20, name: "Kesiman" },
              ],
            },
          ],
        },
        {
          id: 6,
          name: "Badung",
          kecamatan: [
            {
              id: 11,
              name: "Kuta",
              kelurahan: [
                { id: 21, name: "Legian" },
                { id: 22, name: "Seminyak" },
              ],
            },
            {
              id: 12,
              name: "Nusa Dua",
              kelurahan: [
                { id: 23, name: "Benoa" },
                { id: 24, name: "Tanjung Benoa" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
