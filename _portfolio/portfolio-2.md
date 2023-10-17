---
title: "Explorative Self-Supervised Latent Space Search Algorithm (ELSA)"
excerpt: "This project has been done in collaboration with Diptarko Choudhury. We have tried to develop a better auto-labelling algorithm using Active Learning and Self-Supervised Representation Learning <br/>
<center><img src='/images/elsa.png'></center>
<center>The ELSA architecture</center>"

collection: portfolio.
---

## Variance Invariance and Covariance Regularization (VICReg)
<center>
<img src ='/images/VICReg.png'>
</center>
<center>The VICReg architecture ([Bardes et. al, 2022](https://arxiv.org/abs/2105.04906))</center>
In the above figure, we have the VICReg architecture. This architecture, takes input two things, images and augmented images. These are then mapped to the representation space through an encoder, and then they are passed on to the projector to be mapped to the embedding space. The loss function for this architecture has three components
- **Variance** - This makes sure that the features are as much different from each other as possible.
- **Invariance** - This makes sure that even with applied augmentations, images come as closer as possible to each other. This is essentially a similarity metric between two augmented images.
- **Covariance** - This makes sure, that different images are as far away from each other as possible.
It is on account of these terms in the loss function, it is called Variance Invariance and Covariance Regularization (VICReg).
<center>
<img src ='/images/loss.png'>
</center>
<center>A visual representation of the VICReg loss (taken from [here](https://sigmoidprime.com/post/vicreg/))</center>
## Exploratory Latent Space Search Algorithm
This algorithm is an unique approach to help increase labelling efficieny for a given class of data. We have used active learning aided algorithm, to find samples from minority classes. So what we actually do is to explore the latent space or representation space of a self-supervised algorithm. We assume, that similar samples, in the representation space form clusters. We use nearest neighbour search, and random search algorithm to explore the latent space, and then use a active learning component, to learn from the environment, and search newer clusters from the same class in the representation space.<br/>
<center>
<img src ='/images/elsa.png'>
</center>
<center> Architecture of ELSA </center>
We can see in the architecture, how the latent space or the represenatation space is being explored through nearest neighbour search, random search and how the oracle (an active learning component) is guiding the search for samples from the similar class.<br/> 
The results of this project have been submitted to a conference as of now, and is under review.

