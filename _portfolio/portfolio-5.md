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
All phenomenons of large-scale magnetic field generation are modelled using equation of Magnetohydrodynamics. To start off, we essentially write the Induction Equation in terms of the Mean Field Component of the Magnetic Fields. On writing this equation in cylindrical coordinates, we get three equations dictating the evolution of Magentic field components in the $r$, $\phi$, and $z$ components of the equation. First to see how the dynamo is actually powered up through the $\alpha$, $\Omega$ dynamo, we shall do a part by part analysis. We also wish to explore fountain flows in Galaxies and how they affect dynamo equations. We have taken theoretical motivation from (Rodrigues et. al., 2019). Thus we first have the induction equation which is given by
<center>
$$
\frac{\partial \mathbf{B}}{\partial t} = \nabla \times (\mathbf{v} \times \mathbf{B}) + \eta \nabla^2 \mathbf{B}
$$
</center>
Then we do a component seperation of these fields. We decompose all the physical parameters into two components, one being the large scale mean field components and the other part is the random or turbulent component. Thus for every vector field of interest, say $\mathbf{A}$, we decompose it as follows:

<center>
$$

\mathbf{A} = \mathbf{\bar{A}} + \mathbf{b} 

$$
</center>
Where the barred component is the mean field, and the component in lower case is the turbulent component. Thus, if we do a average over scales larger than the scales of the turbulent component, we are only left with the mean field component, and we will deal will the equations obtained by this method. It is valid to question as to why are we neglecting random fields for this part. Given the physical scales of a galaxy, it is safe to do this averaging. We must also note that the effect of turbulence is not actually entirely removed. Turbulence components tend to diffuse out the energy from the large scale magnetic fields, and the turbulence component is actually accounted for by the diffusivity parameter $\eta_t$.
<center>
$$
\eta_t =  \frac{1}{3}\tau v_{rms}^2
$$
</center>
Where $\tau$ is the timescales for turbulent flows, and $v_{rms}$ is the typical turbulent flow velocity. We therefore have accounted for turbulence in a simpler fashion by this parameter $\eta_t$.
Now for the dynamo to amplify the magnetic flux, we need to $\alpha$-$\Omega$ effect. This competes with the diffusion term to generate higher mean field amplitudes. We need atleast $\alpha$ and $\Omega$ effect for this. For our case of analysis, we have neglected $\alpha^2$ effect. I will shortly desribe these effects more rigorously in coming sections.

Thus we have a picture now that, turbulent motions tend to diffuse out the magnetic field strength. If there is some machineary which transports the turbulence out of system, then it should help in retaining the large scale fields. Fountain flow is one such machinery. Essentially, gas when heated up by supernovae expands and rises above the plane of the galaxy, transporting the small scale turbulences along with it.

Some studies (Vainshtein, Samuel, 1992) suggest that the Lorent force due to rapidly growing small scale magnetic fields, can render the large-scale dynamo ineffective, producing only a negligible mean field, which in contradiction to what we actually have.

Thus we study the effect of fountain flows in the $\alpha$-$\Omega$ dynamo, and see how it changes the usual scenario.

### Methods

For ease of analysis, we have assumed a no-z approximation, that is for a thin disc, the derivatives along $z$ can be essentially replaced by corresponding ratios. Thus the equations for this case is essentially
<center>
$$
\frac{\partial \bar{B}_r}{\partial t} = - \frac{\bar{V}_r}{r} \frac{\partial}{\partial r} (r\bar{B}_r) - \frac{\partial}{\partial z} (\bar{V}_z\bar{B}_r) - \frac{\partial}{\partial z} (\alpha \bar{B}_{\phi}) + \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (r\bar{B}_r) \right) + \frac{\partial^2 \bar{B}_r}{\partial z^2} \right]
$$

$$

\frac{\partial \bar{B}_{\phi}}{\partial t} = -q\Omega \bar{B}_r - \frac{\partial}{\partial r}(\bar{V}_r\bar{B}_{\phi}) - \frac{\partial}{\partial z}(\bar{V}_z\bar{B}_{\phi}) + \frac{\partial}{\partial z}(\alpha \bar{B}_r) + \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (r\bar{B}_{\phi})\right) + \frac{\partial^2 \bar{B}_{\phi}}{\partial z^2}  \right]

$$
</center>
The derivatives with respect to z are then estimated as
<center>
$$
\left|\frac{\partial^2}{\partial z^2} \right| \to \frac{\pi^2}{4 h^2}
$$
</center>
For the first part, we neglect all field sustaining effect, and just look into the diffusion equation.
We neglect all couplings between $B_r$ and $B_{\phi}$. We also neglect the $\alpha$ and $\Omega$ terms. Thus we consider only the terms involving $\nabla^2$. Hence, at this stage, we essentially have only the diffusion terms, and our equations are as follows. 
<center>

$$
\frac{\partial \bar{B}_r}{\partial t} =\eta_t \left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (r\bar{B}_r) \right) + \frac{\partial^2 \bar{B}_r}{\partial z^2} \right]
$$

$$
\frac{\partial \bar{B}_{\phi}}{\partial t} = \eta_t \left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (r\bar{B}_{\phi}) \right) + \frac{\partial^2 \bar{B}_{\phi}}{\partial z^2} \right]
$$
 

</center>
We see that the magnetic fields dissipate quuickly in this case, and dynamo is not in action as shown in the results section.
Now we proceed to add the $\alpha$ and $\Omega$ terms, neglecting the $\alpha^2$ effect. That is we neglect the term involving $\alpha$ in the evolution equation for $B_{phi}$, and retain the terms having $\Omega$, and $\alpha$ for the evolution of $B_{r}$. Then we have,
$$
\frac{\partial \bar{B}_r}{\partial t} = - \frac{\partial}{\partial z} (\alpha \bar{B}_{\phi}) + \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (r\bar{B}_r) \right) + \frac{\partial^2 \bar{B}_r}{\partial z^2} \right]
$$

$$
\frac{\partial \bar{B}_{\phi}}{\partial t} = -q\Omega \bar{B}_r - \eta_t\left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial}{\partial r} (r\bar{B}_{\phi})\right) + \frac{\partial^2 \bar{B}_{\phi}}{\partial z^2}  \right] 
$$


ABCD
### Results
Solving for the case of diffusion equation, we end up with a solution, in which whatever existing field is there, they diffuse out, and the field strength reduces drastically. The example cases are given below.
<center>

<img src='/images/B_evolution_1.gif' width='350' height='350' />
<img src='/images/B_evolution_2.gif' width='350' height='350' />
<img src='/images/B_evolution_3.gif' width='350' height='350' />
</center>
<center> Evolution of the magnetic fields with different initial conditions in the Diffusive case</center>
### References 
1. Vainshtein, S. I. & Cattaneo, F. Nonlinear Restrictions on Dynamo Action. The Astrophysical Journal 393, 165 (1992).
2. Shukurov, A., Sokoloff, D., Subramanian, K. & Brandenburg, A. Galactic dynamo and helicity losses through fountain flow. A&A 448, L33–L36 (2006).
3. Shukurov, A., Sokoloff, D., Subramanian, K. & Brandenburg, A. Galactic dynamo and helicity losses through fountain flow. A&A 448, L33–L36 (2006).
4. Rodrigues, L. F. S., Chamandy, L., Shukurov, A., Baugh, C. M. & Taylor, A. R. Evolution of galactic magnetic fields. Monthly Notices of the Royal Astronomical Society 483, 2424–2440 (2019).


