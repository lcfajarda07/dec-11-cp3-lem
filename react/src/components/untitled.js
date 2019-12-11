								 <Button 
									 variant="primary" 
									 onClick={handleShow}>
       							 Create
     								 </Button>




     								 <Card>
						<Card.Header>
							<Card.Header.Title>Add Singer</Card.Header.Title>
						</Card.Header>

						<Card.Content>
							<form onSubmit={addSinger}>
								<div className="field">
									<label className="label" htmlFor="name">
										Name
									</label>
									<input
										id="name"
										className="input"
										type="text"
										onChange={nameChangeHandler}
										value={name}
										
									/>
								</div>

								<div className="field">
									<label className="label" htmlFor="description">
										Description
									</label>
									<input
										id="description"
										className="input"
										type="text"
										onChange={descriptionChangeHandler}
										value={description}
										
										
									/>
								</div>

							

								<Button
									type="submit"
									color="dark"
									fullwidth={true}
								>
									Add new member
								</Button>
							</form>
						</Card.Content>
					</Card>




					?????


					 <div class="container">
					    <div class="col s12 m7">

					      <div class="card horizontal">
					        <div class="card-image">
					          <img src="https://unsplash.it/500/300?image=503" class="fadeIn"/>
					        </div>
					        <div class="card-stacked">
					          <div class="card-content">
					            <span class="card-title">San Francisco</span>
					            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
					              </p>
					          </div>
					          <div class="card-action">
					            <a href="#">This is a link</a>
					          </div>
					        </div>
					      </div>
					    </div>
				  </div>
