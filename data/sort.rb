require 'csv'

counts = Array.new(24, 0)

CSV.foreach('results.csv') do |row|
    if (row[0] != 'null')
      counts[row[0][11..12].to_i] += 1
    end
end

puts counts