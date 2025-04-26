class StaticPagesController < ApplicationController
  def home
    @example_props = {
      helloWorldData: {
        name: "Example user"
      }
    }
  end

  def accessories
  end

  def about
  end

  def contact
  end
end
