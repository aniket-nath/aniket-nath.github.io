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
<center>
<img src = '/images/synchrotron.png'> 
</center>
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
 </center>
 Where the variables have been written as a function of the Lorentz factor, and the above equation is assumed to hold for a given energy range.<br/>
 Taking only the components of Magnetic Field perpendicular to our Line of Sight vector, we proceed to evaluate the Stokes parameters as follows:
 <center>
 $$
 I_s = \epsilon_\nu ^s \int_0^\infty dr\ n_e(r, \hat{n})\left({B_\perp(r,\hat{n})^2}\right)^{(s+1)/4}
 $$
 $$
 Q_s = \Pi_s \epsilon_\nu ^s \int_0^\infty dr\ n_e(r, \hat{n})\left({B_\perp(r,\hat{n})^2}\right)^{(s+1)/4} cos{2\alpha(r,\hat{n})}
 $$
 $$
 U_s = \Pi_s \epsilon_\nu ^s \int_0^\infty dr\ n_e(r, \hat{n})\left({B_\perp(r,\hat{n})^2}\right)^{(s+1)/4} sin{2\alpha(r,\hat{n})}
 $$
 </center>
 Where $I_s, Q_s, U_s$ are the the Stoke's parameters for synchrotron emission.<br/>
 - $\epsilon_\nu^s$ is the synchrotron emissivity
 - $n_e(r,\hat{n}$ is the local dust density of relativistic electrons, at a direction $\hat{n}$ and at a distance r from the origin.
 - $\Pi_s$ is the intrinsic degree of polarization, which is related to the spectral index (s) as follows:
 <center>
 $$
         \Pi_s = \dfrac{s+1}{s+7/3}
 $$
 </center>
 - The angle $\alpha$ is the local polarization angle and is given by:
 <center>
  $$
         \alpha(r,\hat{n}) = \frac{1}{2}tan^{-1}\left(\dfrac{-2 B_\theta B_\phi}{B_\phi^2 - B_\theta^2}\right)
  $$
 </center>
<br/>
Where, $B_\theta$ and $B_\phi$ are the local transverse components of the magnetic field in the local spherical coordinate basis ($\hat{r},\hat{\theta},\hat{\phi}$).<br/>
Also, we note that $B_\perp = B(r,\hat{n})sin \chi$, where $\chi$ is the inclination angle of the GMF lines with the line of sight vector, with $B(r,\hat{n})$ is the total magnitude of the local magnetic field. In this project, we are only interested in the total intensity sky map for the corresponding Synchrotron emission, which is described by the equation for total Intensity. The Intensity maps are generated by using the parameters obtained through most likelihood fitting of parametric modles with the Planck map, as done in [Pelgrims et al., 2021](https://arxiv.org/abs/1807.10515). We have just used the best-fit parameters to generate the total Intensity maps.

## Angular Power Spectrum
When it comes to an one dimensional function, in a given interval, we can expand the function in terms of the Fourier components, and basically the Fourier components and phases, entirely describe the function in that given interval. For an all sky temperature map, which is described by the function $T(\theta, \phi)$, we can write:
<center>
$$
 T(\theta, \phi) = \sum_{\ell = 0}^{\infty} \sum_{m=-\ell}^{\ell} a_{\ell m} Y_{\ell m}(\theta, \phi)
$$
</center>
Where $Y_{\ell m}$ are the spherical harmonics, and:
<center>
$$
Y_{\ell m}(\theta,\phi) = e^{im\phi} P_l^m (\cos \theta)
$$
</center>
$P_l^m$ being the associated Legendre polynomials. Larger values of $\ell$ correspond to smaller scale structures in the map.  For a Gaussian and isotropic field on the sphere, we have:
<center>
$$
C_\ell = \langle |a_{\ell m}|^2 \rangle
$$
</center>
 Since for each multipole $\ell$, there are $2l+1$ values of $m$, we arrive through some mathematical adjustments to:
 <center>
 $$
 C_{\ell} = \dfrac{1}{2\ell + 1} \sum_{m = - \ell}^{\ell} |a_{\ell m}|^2
 $$
 </center>
We see that at smaller values of $\ell$ we have smaller numbers of $m$ to average over, making the average significantly different from the true average. This is called the \textbf{Cosmic Variance}. At larger $\ell$ values, this no longer happens to be a limitation. For each $\ell$ value, the angular scale is of the order of $2\pi/(\ell +1)$ radians. The power spectrum is basically a two point correlation function. Suppose we want to investigate the field values, then the angular correlation function is given by:
<center>
 $$
 C(\chi) = \langle f(\hat{n_1}) f(\hat{n_2}) \rangle
 $$
</center>
Where, $\chi$ is the angle between the directional unit vectors $\hat{n_1}$ and $\hat{n_2}$.<br/>
When it comes to a masked map, we also expand the window or mask function $W$ in terms of the spherical harmonics, and find the power spectrum of the map, removing the portions covered by the map. Although this power spectrum is the pseudo power spectrum, and is different from the true power spectrum, we can relate the ensemble averages of the power spectrum through the mode-mode coupling matrix ([Hivon et. al, 2002](http://arxiv.org/abs/astro-ph/0105302)).
## Statistics through Minkowski Functionals
In order to obtain statistics of the Total Intensity maps from the simulated parameters, we essentially treat the sky map as a Random field on a sphere ($\mathbb{S}^2$). Since we have only one realisation available at hand for each pixels, or points on the sphere, we take the assumption of ergodicity, to get statistics from this one realisation of the Random field, which here is the Total Intensity ($I_s$) values at every points of $\mathbb{S}^2$. The assumption of ergodicity is based on the fact, that by averaging over volume, we can compensate for the lack of more realisations. Although, this is true for Gaussian fields, it has not yet been proven to be true for non-Gaussian fields. Neverthless, we ignore the warning like a physicist, and proceed to study the statistical non-Gaussianity of the Random field under consideration here.<br/>
We will now explain, how we can come up with a Probability Distribution Function (PDF) for the Random field on a sphere ($\mathbb{S}^2$). We assume, that the space is homogeneous, i.e., the PDF remains unchanged if we move around the space under consideration.<br/>
We take the random variable ($\delta T$) to be defined on each point of the sphere([Buchert et. al, 2017](https://doi.org/10.1088%2F1361-6382%2Faa5ce2)). The variable is then described by a probability distribution function $P(t)$. Where $t \in \mathbb{R}$ ($\mathbb{R} $is the set of all real numbers), and $P(t) \ge 0$. We can obtain the \textit{Cumulative Distribution Function (CDF)} from $P(t)$ as follows:
<center>
$$
F(\tau) = prob(\delta T < \tau) = \int_{-\infty}^\tau P(t) dt
$$
</center>


