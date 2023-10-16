---
title: "Correlating Synchrotron with Galactic Magnetic Field"
excerpt: "The aim of this project is to find how the Galactic Magnetic Field (GMF) may be related to the Galactic synchrotron that is produced due to the interaction of relativistic Cosmic Ray Electorns with the GMF. We take the Haslam Map at 408 MHz, as our real world data, and we used the gpempy module to simulate different Synchrotron Maps combining different Geometric features of Magnetic field and electron distribution for our Galaxy<br/>
<center><img src='/images/HAS14.png'></center>
<center>The Haslam Map at 408 MHz</center>"
collection: portfolio.
---

## Motivation and Theoretical Background
In this project we use Minkowski Functionals to test the non-Gaussian nature of the Galactic synchrotron foreground emission. We use full-sky map of 408 MHz Haslam map as a tracer of Galactic synchrotron emission. [Rahman et al., 2021](http://arxiv.org/abs/2104.00419) paper found that the 408 MHz map can be approximated as a Gaussian distribution over the high Galactic sky at the angular scales smaller than 3 degrees. Using simulations of the synchrotron emission with a large-scale Galactic Magnetic Field (GMF) including random turbulent component, we aim to relate the observed statistical properties of the 408 MHz sky with the properties of the Galactic magnetic field. <br/>
In order to study the properties, we first do a theoretical modelling of the Synchrotron Emission, along with a modelling of possible geometries of the Galactic Magnetic Field. Using the corresponding models, we have used parameters to define the geometry from best-fit models obtained through simulations using a Markov-Chain Monte-Carlo parameter space survey ([Pelgrims et al., 2021](https://arxiv.org/abs/1807.10515)). <br/>
## Synchrotron Emission
The Galactic Synchrotron emission is produced when relativistic electrons swirl around the GMF Lines ([Rybicki and Lightman, Radiative Processes in Astrophysics](https://books.google.co.in/books/about/Radiative_Processes_in_Astrophysics.html?id=LtdEjNABMlsC&redir_esc=y)). This emission is supposedly polarised perpendicular to the GMF lines. As shown in figure, the relativistic electrons swivells around the magnetic field line (B-Field), with their axis of revolution parallel to the direction of the magnetic field. This shows that the synchrotron emission is polarised in a direction perpendicular to the magnetic field as shown in the figure. <br/>
<center> <img src='images/synchrotron.png'> </center>
<center> The relativistic electrons swivel around the magnetic field lines (B-Field)</center>
 We are specifically interested in contribution of synchrotron to the Cosmic Microwave Background at high frequencies.We assume a power law distribution for the energy of relativistic electrons, i.e., we assume that the number of electrons in a specific energy range can be approximated as follows:
 <center>
 $$
 N(E)dE = CE^{-s}dE  
 $$
 </center>
 The variable $E$, can as well be replaced by the Lorentz factor $\gamma$, and in such case, we can also write the power law dependence as follows:
 <center>
 $$
 N(\gamma)d\gamma = CE\gamma^{-\alpha}d\gamma
 $$
