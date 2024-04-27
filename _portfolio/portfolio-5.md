---
title: "Solving Galactic Dynamo Equations and Exploring Fountain Flows"
excerpt: "This project is done as a part of the course I took in Magnetohydrodynamics and Plasma Physics. I have attempted to solve the Dynamo equations, starting off with the Diffusion equations, and then gradually including the induction terms to obtain the final solution <br/>

<center><img src='/images/galaxy.jpg' width='400' height='400' /></center>
<center> Galactic Magnetic Fields </center>
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
<br/>
Finally, we aim to solve the following equations numerically
<center>
$$
\frac{\partial B_r}{\partial t} = - \frac{V_r}{r} \frac{\partial}{\partial r} (rB_r) - \frac{\partial}{\partial z} (V_zB_r) - \frac{\partial}{\partial z} (\alpha B_{\phi}) + \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (rB_r) \right) + \frac{\partial^2 B_r}{\partial z^2} \right]

$$

$$
\frac{\partial B_{\phi}}{\partial t} = -q\Omega B_r - \frac{\partial}{\partial r}(V_rB_{\phi}) - \frac{\partial}{\partial z}(V_zB_{\phi}) + \frac{\partial}{\partial z}(\alpha B_r) + \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (rB_{\phi})\right) + \frac{\partial^2 B_{\phi}}{\partial z^2}  \right] 

$$
</center>
Where $\eta_t$ is the sum of the two diffusivities.
## Evolution of Magnetic Fields
In the primary case, we neglect all couplings between $B_r$ and $B_{\phi}$. We also neglect the $\alpha$ and $\Omega$ terms. Thus we consider only the terms involving $\nabla^2$. Hence, at this stage, we essentially have only the diffusion terms. 
<center>
$$
\frac{\partial B_r}{\partial t} =\eta_t \left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (rB_r) \right) + \frac{\partial^2 B_r}{\partial z^2} \right]

$$
$$

\frac{\partial B_{\phi}}{\partial t} = \eta_t \left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (rB_{\phi}) \right) + \frac{\partial^2 B_{\phi}}{\partial z^2} \right]

$$
</center>
The derivatives with respect to z are then estimated as
<center>
$$
\left|\frac{\partial^2}{\partial z^2} \right| \to \frac{\pi^2}{4 h^2}
$$
</center>
This essentially gives us two independent equations of $B_r$ and $B_{\phi}$.
The present codes can be found <a href="https://colab.research.google.com/drive/1liwdb49bZvJ2Ns1BIuJ_O__W57uBnlsb?usp=sharing">here</a>. As of now, I have only used Dirichlet boundary conditions, with different initial conditions. The pitch angle evolution has also been explored, in the corresponding code.

<center>

<img src='/images/B_evolution_1.gif' width='350' height='350' />
<img src='/images/B_evolution_2.gif' width='350' height='350' />
<img src='/images/B_evolution_3.gif' width='350' height='350' />
</center>
<center> Evolution of the magnetic fields with different initial conditions in Diffusion</center>

## The $\alpha$ - $\Omega$ effect (Part 2)
Now, we also include the $\alpha$ and $\Omega$ terms in our equation to demonstrate how the magnetic energy is amplified by the coupling of these two effects. As of now, we neglect the $\alpha^2$ effect. Thus we have:
<center>
$$
\frac{\partial B_r}{\partial t} = - \frac{\partial}{\partial z} (\alpha B_{\phi}) + \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (rB_r) \right) + \frac{\partial^2 B_r}{\partial z^2} \right]
$$
$$
\frac{\partial B_{\phi}}{\partial t} = -q\Omega B_r - \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (rB_{\phi})\right) + \frac{\partial^2 B_{\phi}}{\partial z^2}  \right] 
$$
</center>
For the z-derivatives we use similar approximation and thus try to solve this equation now. For this study, I have assumed $\alpha$ to be constant, with $\Omega$ having the following functional form.
<center>
$$
\Omega = \dfrac{\Omega_0}{\sqrt{ \left(1+\left(\frac{r}{R_0}\right)^2\right) }}
$$
</center>
We have chosen a constant value for $\alpha$ and $\Omega_0$ and $R_0$, for this study. We have observed that for an Dynamo number D which is greater than 0.5, we observe first a diffusion of both the magnetic field components, and then the dynamo effects start playing and leads to a growth of the magnetic fields exponentially.
<center>

<img src='/images/B_evolution_alpha.gif' width='350' height='350' />
<img src='/images/B_evolution_alpha_1.gif' width='350' height='350' />
<img src='/images/B_evolution_alpha_2.gif' width='350' height='350' />
</center>
<center>
Evolution of Magnetic Field for Dynamo Number greater than the Critical value.
</center>
We have also compared the the evolution of the magnetic field, at a specific location, for our case it was r=5 (the choice is arbitrary). We have seen that, in the initial time steps, the diffusion dominates, but at a specific point the $\alpha-\Omega$ effect starts pumping up the magnetic field. When observed at a global scale, the net magnetic energy increases as well (which is proportional to $B^2$). For the critical value of D, we have observed that the growth becomes zero, after some time, and at the other extrema, a decay in the magnetic field energy is observed.
<center>
<img src='/images/local_mag.png' width='550' height='550' />
</center>
<center>
The Evolution of magnetic field components at a local position of r = 5.
</center>

<center>
<img src='/images/magnetic_energy.png' width='450' height='450' />
</center>
<center>
The change in $B^2$ for each Dynamo number.
</center>
The codes for this part can be found <a href="https://colab.research.google.com/drive/1nx94qIvetfV9nYqES-05cV_Zjse3qTHU?usp=sharing">here</a>.
## Final Submission

### Abstract
Study of the non-linear dynamo equation in the context of scales relevant to galaxies is pivotal to get an insight into the dynamos that generate the magnetic fields of galaxies. In this project, we have investigated the dynamo equation, starting off from the Induction equation. We have observed how diffusion comes into play, and adding alpha-omega terms at certain levels makes the dynamo action active. We also add the fountain flow term in the dynamo equation and see how the fields change over time.

### Introduction
All phenomenons of large-scale magnetic field generation are modelled using equation of Magnetohydrodynamics. To start off, we essentially write the Induction Equation in terms of the Mean Field Component of the Magnetic Fields. On writing this equation in cylindrical coordinates, we get three equations dictating the evolution of Magentic field components in the $r$, $\phi$, and $z$ components of the equation. First to see how the dynamo is actually power up through the $\alpha$, $\Omega$ dynamo, we shall do a part by part analysis.
For ease of analysis, we have assumed a no-z approximation, that is for a thin disc, the derivatives along $z$ can be essentially replaced by corresponding ratios. Therefore, we have the following equations.
<center>
$$
\frac{\partial B_r}{\partial t} = - \frac{V_r}{r} \frac{\partial}{\partial r} (rB_r) - \frac{\partial}{\partial z} (V_zB_r) - \frac{\partial}{\partial z} (\alpha B_{\phi}) + \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (rB_r) \right) + \frac{\partial^2 B_r}{\partial z^2} \right]

$$

$$
\frac{\partial B_{\phi}}{\partial t} = -q\Omega B_r - \frac{\partial}{\partial r}(V_rB_{\phi}) - \frac{\partial}{\partial z}(V_zB_{\phi}) + \frac{\partial}{\partial z}(\alpha B_r) + \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (rB_{\phi})\right) + \frac{\partial^2 B_{\phi}}{\partial z^2}  \right] 

$$

The derivatives with respect to z are then estimated as
<center>
$$
\left|\frac{\partial^2}{\partial z^2} \right| \to \frac{\pi^2}{4 h^2}
$$
</center>



### Theory

### Methods

### Results



