---
title: "Taking a survey and analysing the X-Ray spectra of Dual AGNs"
description: "In this project, I took a survey of dual Active Galactic Nucleus, as reported in literature and examined the X-Ray spectra of different sources. I used Chanda CIAO and NASA HEASOFT softwares to download, bin and fit the spectra to different models."
heroImage: "/agn.png"
order: 3
---

## Active Galactic Nuclei

The centre of a galaxy usually harbours a Super Massive Black Hole (SMBH), which forms the deepest potential of the galactic system. This SMBH essentially creates the trapping potential for the galactic system to sustain itself and not fly out.  
The mass of an SMBH varies from nearly millions to billions of times the solar mass. Some of these nuclei are highly luminous and cannot be explained by the stellar population. Such nuclei are called Active Galactic Nuclei (AGNs). They emit radiation across all wavelengths and have been detected in a major fraction of elliptical and spiral galaxies.  

AGNs are basically accreting SMBHs. Gas and dust swirl around the black hole, forming an accretion disk. In the inner region of the accretion disk, mass is absorbed into the black hole, while a part of it is released as radiation and highly energetic matter. The radiation emitted from the accretion process, especially near the closest stable orbit, provides information about the near event-horizon environment.  

The presence of molecular torii around the central region causes very strong absorption lines to appear in the observed spectrum. An accretion disk is formed when matter with non-zero angular momentum falls into the gravitational potential and loses energy as it spirals around the SMBH, finally accreting into the black hole.  

The process of accretion is an efficient way to release radiation. The energy released in this process can be approximated, to first order, by the change in potential energy (ΔE) of a test particle of mass *m* in the gravitational field of the black hole:

**ΔE = G × M × m / Rₛ**

where *Rₛ* is the Schwarzschild radius of the black hole.

<center><img src='/agn_morph.png' width="50%" height="50%"></center>  
<center> Morphology of Active Galactic Nuclei (<a href="projects/aniket_diptarko/proposal.pdf">taken from here</a>) </center>  

The accretion luminosity (Lₐ), which represents the luminosity of the radiation from an accreting system, can be expressed as:

**Lₐ = ζ × G × M × (dm/dt) / Rₛ**

where *ζ* represents the efficiency of the accretion process.

---

## Estimating Geometry from Spectra

As gas and matter accrete onto the black hole from the last stable orbit, a part of the matter is ejected as energy or as a highly energetic beam of matter. This leads to the emission of high-energy radiation in X-rays, gamma rays, etc.  

Some portion of this radiation is reflected, absorbed, and re-emitted, appearing as spectral features over the X-ray continuum, which typically follows a power law. By fitting models to these spectra and extracting specific parameters, one can infer information about the geometry near the event horizon.  

Using tools like **Chandra CIAO**, **Sherpa**, or **NASA HEASOFT**, one can constrain parameters that describe the geometry simply by selecting and fitting appropriate models to the observed data. There is ongoing discussion in the community about which models best capture the underlying physics, so exploring multiple models helps in constraining the near-horizon geometry more reliably.  

This project eventually led to a publication, which can be found [here](/publications/detection-of-the-fe-k-lines-from-the-binary-agn-in-4c3711).

