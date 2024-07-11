import { Router } from "express";
import { wilayahData } from "../data/wilayah";

const router = Router();

router.get("/provinsi", (req, res) => {
  res.json(wilayahData.provinsi);
});

router.get("/provinsi/:provinsiId", (req, res) => {
  const provinsi = wilayahData.provinsi.find(
    (p) => p.id === parseInt(req.params.provinsiId)
  );
  if (provinsi) {
    res.json(provinsi);
  } else {
    res.status(404).send("Provinsi not found");
  }
});

router.get("/provinsi/:provinsiId/kabupaten", (req, res) => {
  const provinsi = wilayahData.provinsi.find(
    (p) => p.id === parseInt(req.params.provinsiId)
  );
  if (provinsi) {
    res.json(provinsi.kabupaten);
  } else {
    res.status(404).send("Kabupaten not found");
  }
});

router.get("/provinsi/:provinsiId/kabupaten/:kabupatenId", (req, res) => {
  const provinsi = wilayahData.provinsi.find(
    (p) => p.id === parseInt(req.params.provinsiId)
  );
  if (provinsi) {
    const kabupaten = provinsi.kabupaten.find(
      (k) => k.id === parseInt(req.params.kabupatenId)
    );
    if (kabupaten) {
      res.json(kabupaten);
    } else {
      res.status(404).send("Kabupaten not found");
    }
  } else {
    res.status(404).send("Provinsi not found");
  }
});

router.get(
  "/provinsi/:provinsiId/kabupaten/:kabupatenId/kecamatan",
  (req, res) => {
    const provinsi = wilayahData.provinsi.find(
      (p) => p.id === parseInt(req.params.provinsiId)
    );
    if (provinsi) {
      const kabupaten = provinsi.kabupaten.find(
        (k) => k.id === parseInt(req.params.kabupatenId)
      );
      if (kabupaten) {
        res.json(kabupaten.kecamatan);
      } else {
        res.status(404).send("Kecamatan not found");
      }
    } else {
      res.status(404).send("Provinsi not found");
    }
  }
);

router.get(
  "/provinsi/:provinsiId/kabupaten/:kabupatenId/kecamatan/:kecamatanId",
  (req, res) => {
    const provinsi = wilayahData.provinsi.find(
      (p) => p.id === parseInt(req.params.provinsiId)
    );
    if (provinsi) {
      const kabupaten = provinsi.kabupaten.find(
        (k) => k.id === parseInt(req.params.kabupatenId)
      );
      if (kabupaten) {
        const kecamatan = kabupaten.kecamatan.find(
          (kc) => kc.id === parseInt(req.params.kecamatanId)
        );
        if (kecamatan) {
          res.json(kecamatan);
        } else {
          res.status(404).send("Kecamatan not found");
        }
      } else {
        res.status(404).send("Kabupaten not found");
      }
    } else {
      res.status(404).send("Provinsi not found");
    }
  }
);

router.get(
  "/provinsi/:provinsiId/kabupaten/:kabupatenId/kecamatan/:kecamatanId/kelurahan",
  (req, res) => {
    const provinsi = wilayahData.provinsi.find(
      (p) => p.id === parseInt(req.params.provinsiId)
    );
    if (provinsi) {
      const kabupaten = provinsi.kabupaten.find(
        (k) => k.id === parseInt(req.params.kabupatenId)
      );
      if (kabupaten) {
        const kecamatan = kabupaten.kecamatan.find(
          (kc) => kc.id === parseInt(req.params.kecamatanId)
        );
        if (kecamatan) {
          res.json(kecamatan.kelurahan);
        } else {
          res.status(404).send("Kelurahan not found");
        }
      } else {
        res.status(404).send("Kecamatan not found");
      }
    } else {
      res.status(404).send("Provinsi not found");
    }
  }
);

export default router;
