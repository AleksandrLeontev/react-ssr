# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    redux_store('store', props: { auth: { name: params[:all] } })
  end
end
