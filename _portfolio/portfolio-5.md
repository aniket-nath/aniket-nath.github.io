---
title: "Solving Galactic Dynamo Equations and Exploring Fountain Flows"
excerpt: "This project is done as a part of the course I took in Magnetohydrodynamics and Plasma Physics. I have attempted to solve the Dynamo equations, starting off with the Diffusion equations, and then gradually including the induction terms to obtain the final solution <br/>

<center><img src='/images/galaxy.jpg' width='400' height='400' /></center>
<center> A visual description of AGN geometry </center>
"
collection: portfolio.
---

## The Mean Field Equations
In the regime of Magnetohydrodynamics, we essentially aim to solve the following equation, in different contexts.
<center>
$$
\frac{\partial \mathbf{B}}{\partial t} = \nabla \times (\mathbf{v} \times \mathbf{B}) + \eta \nabla^2 \mathbf{B}
$$
</center>
In the case of Galactic dynamo, the toroidal and poloidal fields couple together to give rise to galactic dynamos.
<br/>
We start off with the diffusion equation, which is obtained by removing the induction term in the mean field equation. In real cases, it is the trade off between the induction term and the diffusion term that essentially gives rise to the dynamo. For our case, we start off with just the diffusion term, which is also analytically solvable. We  particularly are looking into the radial component and axial component of the Magnetic field in cylindrical coordinates. The component of the Magnetic field along z is assumed to be constant, and the derivatives of z are replaced by terms with scale height in denominator. We have also assumed axial symmetry, making the $\phi$ derivatives zero. In this context, we try to solve the diffusion equation.

## Evolution of Magnetic Fields


The present codes can be found <a href="https://colab.research.google.com/drive/1liwdb49bZvJ2Ns1BIuJ_O__W57uBnlsb?usp=sharing">here</a>

<!-- <center> -->

<img src='/images/galaxy.jpg' width='400' height='400' />

<!-- </center> -->

