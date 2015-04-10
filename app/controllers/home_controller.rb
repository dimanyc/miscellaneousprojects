class HomeController < ApplicationController
  before_action :set_contact

  def design
  end

  def about
  end

  def contact
  end

  
  private

  def set_contact
    @contact = Contact.new
  end

end
