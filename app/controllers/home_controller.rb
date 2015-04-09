class HomeController < ApplicationController
  before_action :set_contact

  def design
#    @contact = Contact.new
  end

  def about
  end

  private

  def set_contact
    @contact = Contact.new
  end

end
